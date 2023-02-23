<template>
  <div class="d-flex justify-start">
    <div class="pt-6">{{ title }}</div>

    <v-hover v-bind:key="id" v-for="(theme, id) in themes">
      <template v-slot:default="{ hover }">
        <v-card
          :disable="$vuetify.theme.dark"
          @click="SetSolidColor(theme)"
          elevation="0"
        >
          <v-card-text class="ma-0 pa-2">
            <div
              id="dot"
              class="halves-circle1"
              :style="`border-color:  ${theme.primary} ${theme.primary} black black;cursor:pointer;`"
            ></div>
          </v-card-text>

          <v-fade-transition>
            <v-overlay
              opacity="0"
              v-if="
                hover || $vuetify.theme.themes.light.primary == theme.primary
              "
              absolute
            >
              <v-icon color="success">{{ icons.mdiCheckCircle }}</v-icon>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
import { mdiCheckCircle } from "@mdi/js";

export default {
  props: {
    title: { deafult: "" },
    themes: {},
  },
  setup() {
    return {
      icons: {
        mdiCheckCircle,
      },
    };
  },
  methods: {
    SetSolidColor(theme) {
      this.$vuetify.theme.themes.light.primary = theme.primary;
    },
  },
};
</script>

<style scoped>
.halves-circle1 {
  background: rgb(255, 253, 253);
  height: var(--size);
  width: var(--size);
  border: var(--border) solid;
  border-radius: 100%;
  transform: rotate(45deg);
}

#hc2 {
  --size: 0px;
  --border: 18px;
}

#dot {
  --size: 0px;
  --border: 18px;
}
</style>