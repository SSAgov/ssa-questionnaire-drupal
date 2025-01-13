import { mockDrupalQuestionsResponse } from './mockDrupalQuestionsResponse';
import { API, useHardcodedData } from '@/constants';
import { ELang, IEligibilityQuestionsResponse, IShowGlobalAlertProps } from '@/interfaces';

export async function fetchQuestionsContent(
  language: ELang,
  showGlobalAlert: (p: IShowGlobalAlertProps) => void,
  set__loading
): Promise<IEligibilityQuestionsResponse> {
  const apiLangPrefix: string = language === 'es' ? '/es' : '';
  const inDevelopment: boolean = import.meta.env.DEV;
  const onMobileLabServer: boolean = import.meta.env.VITE_DEPLOYMENT_PLATFORM === 'mobile_lab';
  let url: string = `${apiLangPrefix}${API.questionsPath}`;
  let data: IEligibilityQuestionsResponse;
 
  if (inDevelopment || onMobileLabServer)
    url = `${API.devOrigin}${apiLangPrefix}${API.questionsPath}`;

  try {
    set__loading(true);
    const response: Response = await window.fetch(url);
    if (!response.ok) {
      set__loading(false);
      throw new Error(
        `Error while fetching data from drupal. Status: ${response.status}`,
      );
    }

    data = await response.json();
    
    function delayResponse(){
      return new Promise((res, rej) => {
        setTimeout(() => {
          res('resolved in 10s');
        }, 10000);
      });
    } 
    // const res = await delayResponse();
    // console.log(res);
    set__loading(false);
  } catch (error) {
    // if (inDevelopment) {
    //   showGlobalAlert({
    //     type: 'error',
    //     heading: `Failed to fetch data from Drupal`,
    //     content: `Api call to CMS has failed. Check if the CORS policy is properly handled. Also, make sure there are environmental variables with base URL to CMS present and properly configured. Try <a href="#" onclick="location.reload()">reloading</a>.`,
    //   });
    // } else {
    //   showGlobalAlert();
    // }
    set__loading(false);
    console.log('error = ', error);
    return data;
  }
  return data;
  //return useHardcodedData ? mockDrupalQuestionsResponse : data;
}
