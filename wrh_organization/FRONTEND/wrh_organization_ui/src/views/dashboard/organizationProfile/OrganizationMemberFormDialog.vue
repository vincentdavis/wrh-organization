<template>
  <v-dialog v-model="isVisible" persistent scrollable max-width="900px">
    <v-card>
      <v-card-title>
        <span class="headline">{{
          isEditMode
            ? `Edit Member of Organization: ${organization.name}`
            : "Add Member to Organization"
        }}</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" v-if="isEditMode">
            <v-card>
              <v-list dark>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img
                      :src="
                        record._member._user.avatar ||
                        require('@/assets/images/misc/no-profile.png')
                      "
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-icon>{{
                        record._member._user.id
                          ? icons.mdiAccountCheck
                          : icons.mdiAccountCancel
                      }}</v-icon>
                      {{
                        `${record._member.first_name} ${record._member.last_name}`
                      }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-list dense class="member-info-list">
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >E-Mail:</span
                  >
                  <span class="text--secondary">{{
                    record._member.email || "[NO E-MAIL]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >Phone:</span
                  >
                  <span class="text--secondary">{{
                    record._member.phone
                      ? $utils.formatPhone(record._member.phone)
                      : "[NO PHONE]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2">
                    Weight(kg):</span
                  >
                  <span class="text--secondary">{{
                    $utils.removeTrailingZero(record._member.weight) ||
                    "[NO WEIGHT]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >Height(m):</span
                  >
                  <span class="text--secondary">{{
                    $utils.removeTrailingZero(record._member.height) ||
                    "[NO HEIGHT]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >Country:</span
                  >
                  <span class="text--secondary">{{
                    ($const.COUNTRY_MAP[record._member.country] || {}).name ||
                    record._member.country ||
                    "[NO COUNTRY]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >City:</span
                  >
                  <span class="text--secondary">{{
                    record._member.city || "[NO CITY]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >State:</span
                  >
                  <span class="text--secondary">{{
                    record._member.state || "[NO STATE]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >Zipcode:</span
                  >
                  <span class="text--secondary">{{
                    record._member.zipcode || "[NO ZIPCODE]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >Address1:</span
                  >
                  <span class="text--secondary">{{
                    record._member.address1 || "[NO ADDRESS1]"
                  }}</span>
                </v-list-item>
                <v-list-item
                  class="ma-0 pa-0 ml-5"
                  v-if="record._member.address2"
                >
                  <span class="font-weight-medium text-no-wrap me-2"
                    >Address2:</span
                  >
                  <span class="text--secondary">{{
                    record._member.address2 || "[NO ADDRESS2]"
                  }}</span>
                </v-list-item>
              </v-list>
            </v-card>
            <!-- USAC License data -->
            <v-card class="mt-2" v-bind:key="license.id" v-for=" license in record._member.usac_licenses">
              <v-list >
                <v-list-item>
                  
                  <v-list-item-content>
                    <v-list-item-title>
                      USAC License: 

                      {{
                        `${license.first_name} ${license.last_name}`
                      }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-list dense class="member-info-list">
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >License Number:</span
                  >
                  <span class="text--secondary">{{
                    license.license_number || "[NO License No]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >License Type:</span
                  >
                  <span class="text--secondary">{{
                    license.license_type || "[NO License Type]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >License Status:</span
                  >
                  <span class="text--secondary">{{
                    license.license_status
                      ? license.license_status
                      : "[NO Status]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2">
                    Race Age:</span
                  >
                  <span class="text--secondary">{{
                    license.race_age ||
                    "[NO Race Age]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >Race Gender:</span
                  >
                  <span class="text--secondary">{{
                    license.race_gender ||
                    "[NO Race Gender]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >Sex:</span
                  >
                  <span class="text--secondary">{{
                    license.sex ||
                    "[NO Sex]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >License Expiration:</span
                  >
                  <span class="text--secondary">{{
                    license.license_expiration || "[NO License Expiration]"
                  }}</span>
                </v-list-item>
                <v-list-item class="ma-0 pa-0 ml-5">
                  <span class="font-weight-medium text-no-wrap me-2"
                    >Association:</span
                  >
                  <span class="text--secondary">{{
                    license.local_association || "[NO Association]"
                  }}</span>
                </v-list-item>
                
                <v-list-item v-if="license && license.data">
                    <v-expansion-panels >
                        <v-expansion-panel
                        >
                        <v-expansion-panel-header>
                            Other Data
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-list dense class="member-info-list">
                                <v-list-item class="ma-0 pa-0 ml-5" v-bind:key="key" v-for="[key, value] of Object.entries(license.data) ">
                                    {{key.toUpperCase()}} : {{value}}
                                </v-list-item>
                            </v-list>
                        </v-expansion-panel-content>
                        </v-expansion-panel>
                </v-expansion-panels>
                </v-list-item>

              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" :sm="isEditMode ? 6 : 12">
            <v-form
              v-model="formValid"
              :disabled="!organization.my_level.is_admin"
            >
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="12" v-if="!isEditMode">
                      <v-autocomplete
                        v-model="record._member"
                        :search-input.sync="memberSearchInput"
                        :loading="findingMembers"
                        :items="members"
                        no-data-text="Enter member E-mail (No member found!)"
                        chips
                        hide-details
                        label="Member"
                        item-text="email"
                        item-value="id"
                        :menu-props="{ contentClass: 'list-style' }"
                        return-object
                        dense
                        :rules="[rules.required]"
                      >
                        <template #selection="data">
                          <v-chip
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            close
                            @click="data.select"
                            @click:close="record._member = null"
                          >
                            <v-avatar left>
                              <v-img
                                :src="
                                  data.item._user.avatar ||
                                  require('@/assets/images/misc/no-profile.png')
                                "
                              ></v-img>
                            </v-avatar>
                            <div class="d-flex flex-column ms-3">
                              <span
                                class="
                                  d-block
                                  text--success
                                  font-weight-semibold
                                  text-truncate
                                "
                              >
                                {{
                                  `${data.item.first_name} ${data.item.last_name}`
                                }}
                              </span>
                              <span class="text-xs">{{
                                data.item.email || "[NO E-MAIL]"
                              }}</span>
                            </div>
                          </v-chip>
                        </template>

                        <template #item="data">
                          <template>
                            <v-list-item-avatar>
                              <v-img
                                :src="
                                  data.item._user.avatar ||
                                  require('@/assets/images/misc/no-profile.png')
                                "
                              ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                              <v-list-item-title>
                                {{
                                  `${data.item.first_name} ${data.item.last_name}`
                                }}
                              </v-list-item-title>
                              <v-list-item-subtitle>
                                {{ data.item.email || "[NO E-MAIL]" }}
                              </v-list-item-subtitle>
                            </v-list-item-content>
                          </template>
                        </template>
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="record.org_member_uid"
                        label="Member UID"
                        dense
                        hide-details
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-menu
                        v-model="startDateMenu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            class="pt-0 pb-0"
                            v-model="record.start_date"
                            label="Start Date"
                            hide-details
                            :prepend-icon="icons.mdiCalendar"
                            v-bind="attrs"
                            v-on="on"
                            readonly
                          >
                          </v-text-field>
                        </template>
                        <v-date-picker
                          v-model="record.start_date"
                          color="primary"
                          @input="startDateMenu = false"
                        >
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-menu
                        v-model="expDateMenu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            class="pt-0 pb-0"
                            v-model="record.exp_date"
                            label="Exp Date"
                            hide-details
                            :prepend-icon="icons.mdiCalendar"
                            v-bind="attrs"
                            v-on="on"
                            readonly
                          >
                          </v-text-field>
                        </template>
                        <v-date-picker
                          v-model="record.exp_date"
                          color="primary"
                          @input="expDateMenu = false"
                        >
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-switch
                        v-model="record.is_admin"
                        label="Is Admin?"
                        color="primary"
                        hide-details
                      ></v-switch>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-switch
                        v-model="record.is_active"
                        label="Is Active?"
                        color="primary"
                        hide-details
                      ></v-switch>
                    </v-col>
                  </v-row>
                </v-container>
                <app-card-actions
                  action-collapse
                  outlined
                  color="#f3f3f3"
                  v-if="schema && schema.length"
                >
                  <template #title>
                    <span class="warning--text">Extra Organization Fields</span>
                  </template>
                  <v-card-text class="pr-2 pl-2">
                    <v-container>
                      <v-row>
                        <template v-for="f in schema">
                          <v-col
                            v-if="organization.my_level.is_admin || !f.private"
                            cols="12"
                            :md="
                              f.type == 'text' ||
                              (f.choices && f.choices.length > 0)
                                ? 12
                                : 6
                            "
                            :key="f.name"
                          >
                            <template v-if="f.choices && f.choices.length > 0">
                              <p class="caption mb-0">{{ f.title }}</p>
                              <div
                                v-if="f.multiple"
                                class="d-flex flex-wrap demo-space-x mt-0"
                              >
                                <v-checkbox
                                  v-for="(c, cIdx) in f.choices"
                                  v-model="record.member_fields[f.name]"
                                  class="mt-0 mb-0 pt-0"
                                  :label="c.title"
                                  :value="c.value"
                                  :key="cIdx"
                                  hide-details
                                ></v-checkbox>
                              </div>
                              <v-radio-group
                                v-else
                                v-model="record.member_fields[f.name]"
                                hide-details
                                class="mt-0"
                                :rules="f.required ? [rules.required] : []"
                              >
                                <div class="d-flex flex-wrap demo-space-x mt-0">
                                  <v-radio
                                    v-for="(c, cIdx) in f.choices"
                                    :label="c.title"
                                    :value="c.value"
                                    :key="cIdx"
                                    class="mt-0 mb-0 pt-0"
                                  ></v-radio>
                                </div>
                              </v-radio-group>
                            </template>
                            <template
                              v-else-if="
                                f.type == 'integer' ||
                                f.type == 'float' ||
                                f.type == 'number'
                              "
                            >
                              <v-text-field
                                hide-details
                                dense
                                v-model.number="record.member_fields[f.name]"
                                :label="f.title"
                                type="number"
                                :step="f.type == 'integer' ? 1 : 'any'"
                                :rules="f.required ? [rules.required] : []"
                              ></v-text-field>
                            </template>
                            <template v-else-if="f.type == 'percent'">
                              <v-text-field
                                hide-details
                                dense
                                v-model.number="record.member_fields[f.name]"
                                :label="f.title"
                                :rules="f.required ? [rules.required] : []"
                                type="number"
                                suffix="%"
                                min="0"
                                max="100"
                              ></v-text-field>
                            </template>
                            <template v-else-if="f.type == 'boolean'">
                              <v-switch
                                hide-details
                                v-model="record.member_fields[f.name]"
                                :label="f.title"
                                dense
                                class="pt-0 mt-1"
                              ></v-switch>
                            </template>
                            <template
                              v-else-if="f.type == 'date' || f.type == 'time'"
                            >
                              <v-menu
                                v-model="uiFieldsData[`menu__${f.name}`]"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    hide-details
                                    v-model="record.member_fields[f.name]"
                                    :label="f.title"
                                    :rules="f.required ? [rules.required] : []"
                                    class="pt-0 mt-0 mb-5"
                                    :append-icon="
                                      f.type == 'time'
                                        ? icons.mdiClockOutline
                                        : icons.mdiCalendar
                                    "
                                    v-bind="attrs"
                                    v-on="on"
                                    readonly
                                  >
                                  </v-text-field>
                                </template>
                                <v-time-picker
                                  v-if="f.type == 'time'"
                                  v-model="record.member_fields[f.name]"
                                  color="primary"
                                  @click:minute="
                                    uiFieldsData[`menu__${f.name}`] = false
                                  "
                                ></v-time-picker>
                                <v-date-picker
                                  v-else
                                  v-model="record.member_fields[f.name]"
                                  color="primary"
                                  @input="
                                    uiFieldsData[`menu__${f.name}`] = false
                                  "
                                ></v-date-picker>
                              </v-menu>
                            </template>
                            <template v-else-if="f.type == 'datetime'">
                              <v-datetime-picker
                                v-model="record.member_fields[f.name]"
                                :label="f.title"
                                :text-field-props="{
                                  appendIcon: icons.mdiCalendar,
                                  class: 'pt-0 mt-0 mb-5',
                                  rules: f.required ? [rules.required] : [],
                                }"
                              >
                                <template #dateIcon>
                                  <v-icon>{{ icons.mdiCalendar }}</v-icon>
                                </template>
                                <template #timeIcon>
                                  <v-icon>{{ icons.mdiClock }}</v-icon>
                                </template>
                              </v-datetime-picker>
                            </template>
                            <template v-else-if="f.type == 'text'">
                              <v-textarea
                                hide-details
                                dense
                                v-model="record.member_fields[f.name]"
                                :label="f.title"
                                :rules="f.required ? [rules.required] : []"
                                rows="2"
                              ></v-textarea>
                            </template>
                            <template v-else>
                              <v-text-field
                                dense
                                v-model.trim="record.member_fields[f.name]"
                                :label="f.title"
                                :rules="f.required ? [rules.required] : []"
                                type="text"
                              ></v-text-field>
                            </template>
                          </v-col>
                        </template>
                      </v-row>
                    </v-container>
                  </v-card-text>
                </app-card-actions>
              </v-card-text>
              <v-card-text v-if="confirmDelete">
                <v-alert type="warning" dense text :icon="icons.mdiAlert">
                  <p>
                    If you delete this member, all related records will be
                    deleted! Are you sure?
                  </p>
                  <v-btn
                    color="error"
                    outlined
                    small
                    :loading="deleting"
                    @click="deleteRecord()"
                    >Yes, Delete It</v-btn
                  >
                  <v-btn
                    color="secondary"
                    @click="confirmDelete = false"
                    small
                    text
                    class="ml-1"
                    >Cancel</v-btn
                  >
                </v-alert>
              </v-card-text>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <template v-if="isEditMode && organization.my_level.is_admin">
          <v-btn
            color="error"
            outlined
            @click="confirmDelete = true"
            :disabled="confirmDelete"
          >
            <v-icon>{{ icons.mdiDelete }}</v-icon
            >Delete
          </v-btn>
        </template>
        <v-spacer></v-spacer>
        <v-btn color="secondary" outlined @click="hide()">Close</v-btn>
        <v-btn
          v-if="organization.my_level.is_admin"
          color="primary"
          type="submit"
          :loading="saving"
          :disabled="!formValid"
          @click="save"
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {
  mdiPencilOutline,
  mdiPlus,
  mdiDelete,
  mdiAlert,
  mdiCalendar,
  mdiClock,
  mdiClockOutline,
  mdiAccountCheck,
  mdiAccountCancel,
  mdiPhoneOutline,
  mdiEmailOutline,
  mdiEarth,
  mdiHomeCity,
  mdiHomeCityOutline,
} from "@mdi/js";
import _ from "lodash";
import { ref, computed, watch, set } from "@vue/composition-api";
import axios from "@/axios";
import {
  emailIsValid,
  notifyDefaultServerError,
  notifySuccess,
} from "@/composables/utils";
import AppCardActions from "@core/components/app-card-actions/AppCardActions";
import { required } from "@core/utils/validation";
import moment from "moment";

export default {
  components: { AppCardActions },
  props: {
    organization: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const isVisible = ref(false);
    const formValid = ref(false);
    const uiFieldsData = ref({});
    const record = ref({ member_fields: {} });
    const schema = ref(null);
    const saving = ref(false);
    const deleting = ref(false);
    const confirmDelete = ref(false);
    const findingMembers = ref(false);
    const startDateMenu = ref(false);
    const expDateMenu = ref(false);
    const members = ref([]);
    const memberSearchInput = ref("");
    const panel = ref([0]);

    watch(memberSearchInput, () => {
      findMembersDebounce(memberSearchInput.value);
    });

    const isEditMode = computed(() => !!record.value.id);

    const loadSchema = () => {
      let params = {
        exfields: "member_fields_schema",
        fields: "member_fields_schema",
      };
      axios
        .get(`cycling_org/organization/${props.organization.id}`, {
          params: params,
        })
        .then(
          (response) => {
            schema.value = response.data.member_fields_schema || [];
            schema.value.forEach((r) => {
              if (
                r.multiple &&
                !Array.isArray(record.value.member_fields[r.name])
              ) {
                set(record.value.member_fields, r.name, []);
              }
              if (r.type === "datetime" && record.value.member_fields[r.name]) {
                record.value.member_fields[r.name] = moment(
                  record.value.member_fields[r.name]
                ).toDate();
              }
            });
          },
          (error) => {
            notifyDefaultServerError(error, true);
          }
        );
    };

    const deleteRecord = () => {
      deleting.value = true;
      axios
        .delete(
          `cycling_org/organization/${props.organization.id}/members/${record.value.id}`
        )
        .then(
          (response) => {
            deleting.value = false;
            notifySuccess(`Member deleted.`);
            hide();
            context.emit("delete-successed", record.value);
          },
          (error) => {
            deleting.value = false;
            notifyDefaultServerError(error, true);
          }
        );
    };

    const save = () => {
      if (!record.value._member) {
        return;
      }
      var data = Object.assign({}, record.value);
      data.member_fields = Object.assign({}, record.value.member_fields);
      data.member = data._member.id;
      delete data._member;
      saving.value = true;
      var url = `cycling_org/organization/${props.organization.id}/members`,
        httpMethod = axios.post,
        successMsg = "Member added successfully.";
      if (isEditMode.value) {
        url = `${url}/${record.value.id}`;
        httpMethod = axios.patch;
        successMsg = "Member updated successfully.";
      }
      httpMethod(url, data).then(
        (response) => {
          saving.value = false;
          notifySuccess(successMsg);
          hide();
          context.emit("save-successed", response.data);
        },
        (error) => {
          saving.value = false;
          notifyDefaultServerError(error, true);
        }
      );
    };

    const findMembers = (email) => {
      if (findingMembers.value || !emailIsValid(email)) {
        members.value = [];
        return;
      }
      email = email.toLowerCase();
      findingMembers.value = true;
      axios.get("cycling_org/member/find", { params: { email: email } }).then(
        (response) => {
          findingMembers.value = false;
          members.value = response.data.results.map((r) => {
            r.email = email;
            return r;
          });
        },
        (error) => {
          findingMembers.value = false;
          notifyDefaultServerError(error, true);
        }
      );
    };

    const findMembersDebounce = _.debounce(findMembers, 500);

    const hide = () => {
      isVisible.value = false;
    };
    const show = (r) => {
      loadSchema();
      uiFieldsData.value = {};
      record.value = Object.assign({ is_active: true }, r);
      record.value.member_fields = Object.assign(
        {},
        record.value.member_fields
      );
      confirmDelete.value = false;
      deleting.value = false;
      saving.value = false;
      isVisible.value = true;
    };

    return {
      isVisible,
      formValid,
      confirmDelete,
      isEditMode,
      record,
      uiFieldsData,
      schema,
      saving,
      deleting,
      deleteRecord,
      hide,
      show,
      save,
      loadSchema,
      findingMembers,
      findMembers,
      findMembersDebounce,
      members,
      memberSearchInput,
      startDateMenu,
      expDateMenu,
      panel,
      rules: {
        required,
      },
      icons: {
        mdiPlus,
        mdiPencilOutline,
        mdiDelete,
        mdiAlert,
        mdiCalendar,
        mdiClock,
        mdiClockOutline,
        mdiAccountCheck,
        mdiAccountCancel,
        mdiPhoneOutline,
        mdiEmailOutline,
        mdiEarth,
        mdiHomeCity,
        mdiHomeCityOutline,
      },
    };
  },
};
</script>

<style scoped>
.member-info-list .v-list-item {
  margin-bottom: 15px;
  margin-top: 15px;
}
</style>
