import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://6c1d535b65a6448d9142a79b2e8fc234@sentry.io/1488269"
  });
}

function add(value) {}

export default {
  init
};
