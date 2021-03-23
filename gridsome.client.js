import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faDev,
  faGithub,
  faLinkedinIn,
  faMediumM,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobeAmericas, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

config.autoAddCss = true;
library.add(
  faGithub,
  faTwitter,
  faStackOverflow,
  faLinkedinIn,
  faDev,
  faMediumM,
  faMapPin,
  faGlobeAmericas
);

export default function (Vue) {
  Vue.component("font-awesome", FontAwesomeIcon);
}
