<template>
  <v-dialog v-model="isVisible" max-width="700px">
    <v-card class="mb-1">
      <v-form @submit.prevent="save()" v-model="formValid">
        <v-card-title class="headline">
          Share event "#{{record && record.id}}" with other organizations
        </v-card-title>
        <v-simple-table>
          <template #default>
            <thead>
            <tr>
              <th class="">#</th>
              <th class="">Organization (*)</th>
              <th class="">Access (*)</th>
              <th class="actions text-center">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(r, idx) in sharedOrgs" :key="idx">
              <td class="">
                <span class="font-weight-semibold">{{ idx + 1 }}</span>
              </td>
              <td class="">
                <v-autocomplete v-model="r.organization" :items="organizations"
                          single-line hide-details dense item-text="name" item-value="id" :rules="[rules.required]">
                </v-autocomplete>
              </td>
              <td class="">
                <v-select v-model="r.access" :items="$const.EVENT_SHARED_ACCESS_OPTIONS"
                          single-line hide-details dense item-text="title" item-value="value" :rules="[rules.required]">
                </v-select>
              </td>
              <td class="actions text-center">
                <v-tooltip bottom>
                  <template #activator="{ on, attrs }">
                    <v-btn v-on="on" v-bind="attrs" icon @click="insertAfter(idx, {access: 'view'})" tabindex="-1" x-small color="success"
                           outlined class="mr-1">
                      <v-icon>{{icons.mdiPlus}}</v-icon>
                    </v-btn>
                  </template>
                  <span>Insert a row after this</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template #activator="{ on, attrs }">
                    <v-btn v-on="on" v-bind="attrs" icon @click="sharedOrgs.splice(idx, 1)" tabindex="-1" x-small
                           color="error" outlined class="mr-1">
                      <v-icon>{{icons.mdiDelete}}</v-icon>
                    </v-btn>
                  </template>
                  <span>Remove</span>
                </v-tooltip>
              </td>
            </tr>
            <tr v-if="sharedOrgs.length == 0">
              <td colspan="5" class="text-center">
                No Record!
                <v-btn @click="insertAfter(undefined, {access: 'view'})" plain small color="primary">
                  <v-icon small>{{icons.mdiPlusCircleOutline}}</v-icon> Add New
                </v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="secondary" outlined @click="hide()">Close</v-btn>
          <v-btn color="primary" type="submit" :loading="saving" :disabled="!formValid">Save</v-btn>
        </v-card-actions>

        </v-form>
    </v-card>
    <v-overlay :value="saving || loading" :absolute="true" opacity="0.3">
      <v-progress-circular indeterminate></v-progress-circular>
    </v-overlay>
  </v-dialog>
</template>

<script>

import {notifyDefaultServerError, notifySuccess, randomId, refineVTableOptions} from "@/composables/utils";
import axios from "@/axios";
import {computed, onMounted, ref, set, watch} from "@vue/composition-api";
import {required} from "@core/utils/validation";
import {
  mdiPlusCircleOutline,
  mdiPlus,
  mdiCogOutline,
  mdiDelete,
  mdiArrowUpThin,
} from "@mdi/js"
import _ from "lodash";

export default {
  props: {
    organization: {
      type: Object,
      required: true
    }
  },
  components: {},
  setup(props, context) {
    const isVisible = ref(false);
    const saving = ref(false);
    const formValid = ref(false);
    const loading = ref(false);
    const record = ref({shared_org_perms: null});
    const sharedOrgs = ref([]);
    const organizations = ref([]);

    watch(() => record.value.shared_org_perms, (value, oldValue) => {
      sharedOrgs.value = _.sortBy(
          Object.entries(record.value.shared_org_perms || {}).map((v) => ({organization: v[0] * 1, access: v[1]})),
          "id"
      );
    });

    const loadSharedOrgs = () => {
      if (!record || !record.value.id) {
        return;
      }
      loading.value = true;
      let params = {};
      axios.get(`cycling_org/organization/${props.organization.id}/event/${record.value.id}/shared_org_perms`, {params: params}).then((response) => {
        loading.value = false;
        record.value.shared_org_perms = response.data.shared_org_perms;
      }, (error) => {
        loading.value = false;
        notifyDefaultServerError(error, true);
      });

    };

    const loadOrganizations = (search) => {
      axios.get("cycling_org/organization", {params: {page_size: 0, fields: "id,name,type,website,logo"}}).then((response) => {
        organizations.value = response.data.results;
      }, (error) => {
        findingMemberOrgs.value = false;
        notifyDefaultServerError(error, true)
      });
    };

    const insertAfter = (idx, defaultValue) => {
      if (idx === undefined) {
        sharedOrgs.value.push(defaultValue);
      } else {
        sharedOrgs.value.splice(idx + 1, 0, defaultValue);
      }
    };

    const save = () => {
      saving.value = true;
      var sharedOrgsPerms = {};
      sharedOrgs.value.forEach(f => {
        sharedOrgsPerms[f.organization] = f.access;
      });
      var postData = {
        shared_org_perms: sharedOrgsPerms,
      };
      axios.patch(`cycling_org/organization/${props.organization.id}/event/${record.value.id}/shared_org_perms`, postData).then((response) => {
        saving.value = false;
        record.value.shared_org_perms = response.data.shared_org_perms;
        notifySuccess("shared organizations updated successfully.");
        context.emit('save-successed');
      }, (error) => {
        saving.value = false;
        notifyDefaultServerError(error, true);
      });
    };

    const hide = () => {
      isVisible.value = false;
    };

    const show = (r) => {
      r = Object.assign({}, r);
      r.shared_org_perms = Object.assign({}, r.shared_org_perms);
      record.value = r;
      loadSharedOrgs();
      loadOrganizations();
      saving.value = false;
      isVisible.value = true;
    };

    return {
      isVisible,
      loading,
      saving,
      record,
      organizations,
      sharedOrgs,
      formValid,
      insertAfter,
      show,
      hide,
      loadSharedOrgs,
      save,
      rules: {
        required
      },
      icons: {
        mdiPlusCircleOutline,
        mdiPlus,
        mdiCogOutline,
        mdiDelete,
        mdiArrowUpThin,
      }
    }
  },
}
</script>

<style scoped>
  th.actions {
    min-width: 120px;
    width: 120px;
  }
</style>
