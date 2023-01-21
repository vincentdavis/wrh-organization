<template>
  <div class="widget-race-results">
    <events-calendar-widget
        :event-click-route-name="$rns.WIDGET_EVENT_PROFILE"
        :api-params="{organization: $route.params.org_id}"></events-calendar-widget>
  </div>
</template>

<script>
import EventsCalendarWidget from "@/views/public/EventsCalendarWidget";
export default {
  components: {EventsCalendarWidget},
  setup() {
    return {
    }
  }
}
</script>
