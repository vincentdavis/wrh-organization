<template>
  <div class="ma-2">
    <v-form>
      <v-row>
        <v-col cols="12" md="5">
          <v-text-field hide-details label="Panel Name" v-model="newRecord.name"></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field hide-details label="Panel/Iframe URL" v-model="newRecord.url"></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn color="primary" @click="addPanel()" small outlined>Add</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-data-table :headers="tableColumns" :items="records" :options.sync="tableOptions" @update:options="loadRecords()"
      :loading="loading" class="text-no-wrap mt-2"
      :footer-props="{ 'items-per-page-options': $const.DEFAULT_TABLE_PER_PAGE_OPTIONS, 'show-current-page': true, 'show-first-last-page': true }">

      <!-- actions -->
      <template #item.actions="{ item }">
        <div class="d-flex align-end justify-end">
          

          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn icon small v-bind="attrs" v-on="on" @click="deleteRecord(item)">
                <v-icon size="18">
                  {{ icons.mdiDelete }}
                </v-icon>
              </v-btn>
            </template>
            <span>Delete Attachment</span>
          </v-tooltip>

        </div>
      </template>

    </v-data-table>
  </div>
</template>

<script>
import { ref, watch } from "@vue/composition-api";
import {
  convertModelToFormData,
  notifyDefaultServerError,
  notifySuccess,
  refineVTableOptions
} from "@/composables/utils";
import axios from "@/axios";
import {
  mdiDelete,
  mdiDownload,
  mdiCloudUploadOutline,
} from "@mdi/js";
import store from "@/store";
import { routeNames } from "@/router";

export default {
  props: {
    event: {
      type: Object,
      required: true
    },
    organization: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const records = ref([]);
    const pagination = ref({ total: 0 });
    const loading = ref(false);
    const uploading = ref(false);
    const tableOptions = ref({});
    const newRecord = ref({});
    const tableColumns = [
      { text: '#ID', value: 'id', sortable: false },
      { text: 'Name', value: 'name', sortable: false },
      { text: 'Panel/Iframe URL', value: 'url', sortable: false },
      {text: 'ACTIONS', value: 'actions', align: 'end', sortable: false}
    ];

    const loadRecords = (page) => {
      if (page) {
        tableOptions.value.page = page;
      }
      const params = Object.assign({}, refineVTableOptions(tableOptions.value));
      loading.value = true;
      axios.get(`cycling_org/organization/${props.organization.id}/event/${props.event.id}/panel`, { params: params }).then((response) => {
        loading.value = false;
        records.value = response.data;
      }, (error) => {
        loading.value = false;
        notifyDefaultServerError(error, true)
      });

    };

    const deleteRecord = (item) => {
      axios.delete(`cycling_org/organization/${props.organization.id}/event/${props.event.id}/panel/${item.id}`).then((response) => {
        notifySuccess(`Panel #${item.id} deleted.`);
        loadRecords();
      }, (error) => {
        notifyDefaultServerError(error, true);
      });

    };

    const addPanel = () => {
      var formData = convertModelToFormData(newRecord.value),
        headers = { headers: { "Content-Type": "multipart/form-data" } };
      uploading.value = true;
      axios.put(`cycling_org/organization/${props.organization.id}/event/${props.event.id}/panel`, formData, headers).then((response) => {
        uploading.value = false;
        loadRecords(0);
        newRecord.value = {};
        notifySuccess(`uploaded ${response.data.attachments.length} files successfully.`);
      }, (error) => {
        uploading.value = false;
        notifyDefaultServerError(error, true)
      });

    };

    return {
      records,
      tableColumns,
      tableOptions,
      loading,
      uploading,
      pagination,
      loadRecords,
      addPanel,
      deleteRecord,
      newRecord,

      icons: {
        mdiDelete,
        mdiDownload,
        mdiCloudUploadOutline,
      },
    }
  },
}
</script>

<style scoped></style>
