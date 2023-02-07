<template>
  <div>
    <v-dialog v-model="dialog" scrollable max-width="700px">
      <v-card>
        <v-card-title
          >Preview Race Template
          <v-chip class="ml-2" small color="primary" v-if="raceTemplate">
            {{ raceTemplate }}</v-chip
          ></v-card-title
        >
        <v-divider></v-divider>
        <v-card-text>
          <div v-if="dialogLoader" class="text-center mt-2">
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </div>
          <div v-else>
            <v-list dense>
              <v-subheader>Races</v-subheader>

              <v-list-item v-for="(item, i) in races" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="primary" text @click="createRacesFromRaceTemplate">
            Create
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" small color="primary"
          ><v-icon size="18" class="me-1">
            {{ icons.mdiPlus }}
          </v-icon>
          Race Templates</v-btn
        >
      </template>
      <v-list>
        <v-list-item
          @click="previewRaceTemplate(template_name, races)"
          v-for="[template_name, races] of Object.entries(
            $store.state.sitePrefs.core_backend__global_race_template || {}
          )"
          :key="template_name"
        >
          <v-list-item-title
            >{{ template_name }} - Races ({{ races.length }})</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { mdiPlus } from "@mdi/js";
import { notifyDefaultServerError, notifySuccess } from "@/composables/utils";
import axios from "@/axios";

export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
    organization: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const dialog = ref(false);
    const dialogLoader = ref(false);
    const raceTemplate = ref();
    const races = ref([]);
    const raceHeaders = ref([{ text: "Race name", value: "" }]);
    const previewRaceTemplate = (template, racesList) => {
      console.log(races);
      dialog.value = true;
      dialogLoader.value = false;
      races.value = racesList;
      raceTemplate.value = template;
    };
    const createRacesFromRaceTemplate = () => {
      dialogLoader.value = true;
      axios
        .post("cycling_org/race/create_from_race_template", {
          race_template: raceTemplate.value,
          event: props.event.id,
          organization: props.organization.id,
        })
        .then((response) => {
          dialog.value = false;
          notifySuccess(response.data);
          context.emit("save-successed", response.data);
        })
        .catch((error) => {
          dialogLoader.value = false;
          notifyDefaultServerError(error, true);
        });
    };
    return {
      dialog, // dialog model,
      dialogLoader, // dialog loader
      raceTemplate, // hold template,
      races,
      raceHeaders, // Race table name
      previewRaceTemplate,
      createRacesFromRaceTemplate,
      icons: {
        mdiPlus,
      },
    };
  },
};
</script>

<style>
</style>