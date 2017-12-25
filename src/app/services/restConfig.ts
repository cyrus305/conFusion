import {baseURL} from "../shared/baseUrl";

export function RestangularConfigFactory (RestangularProvider){
  RestangularProvider.setBaseUrl(baseURL);
}
