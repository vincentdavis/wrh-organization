<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mt-1" icon v-bind="attrs" v-on="on">
          <v-icon v-bind="attrs" v-on="on">{{ icons.mdiFormatColorFill }} </v-icon></v-btn
        >
      </template>
      <v-card>
        <v-card-title>Colors</v-card-title>
        <v-card-text
          ><ColorSelection :themes="Themes.Solid"> </ColorSelection
        ></v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { Theme } from "@/mixins/Theme";
import ColorSelection from "./ColorSelection.vue";
import { mdiFormatColorFill } from "@mdi/js";
export default {
  mixins: [Theme],
  components: {
    ColorSelection,
  },
  setup() {
    return {
      icons: {
        mdiFormatColorFill,
      },
    };
  },
};
</script>

