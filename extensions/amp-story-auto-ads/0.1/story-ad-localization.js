/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {LocalizationService} from '#service/localization';
import {
  LocalizedStringId,
  createPseudoLocale,
} from '../../../src/localized-strings';
import {Services} from '#service';
import {registerServiceBuilderForDoc} from '../../../src/service-helpers';
import LocalizedStringsAr from './_locales/ar.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsDe from './_locales/de.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsEn from './_locales/en.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsEnGb from './_locales/en-GB.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsEs from './_locales/es.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsEs419 from './_locales/es-419.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsFr from './_locales/fr.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsHi from './_locales/hi.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsId from './_locales/id.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsIt from './_locales/it.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsJa from './_locales/ja.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsKo from './_locales/ko.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsNl from './_locales/nl.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsNo from './_locales/no.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsPtBr from './_locales/pt-BR.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsPtPt from './_locales/pt-PT.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsRu from './_locales/ru.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsTr from './_locales/tr.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsVi from './_locales/vi.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsZhCn from './_locales/zh-CN.json' assert {type: 'json'}; // lgtm[js/syntax-error]
import LocalizedStringsZhTw from './_locales/zh-TW.json' assert {type: 'json'}; // lgtm[js/syntax-error]

/** @const */
export const CtaTypes = {
  APPLY_NOW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_APPLY_NOW,
  BOOK_NOW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_BOOK_NOW,
  BUY_TICKETS: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_BUY_TICKETS,
  DOWNLOAD: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_DOWNLOAD,
  EXPLORE: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_EXPLORE,
  GET_NOW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_GET_NOW,
  INSTALL: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_INSTALL,
  LEARN_MORE: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_LEARN_MORE,
  LISTEN: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_LISTEN,
  MORE: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_MORE,
  OPEN_APP: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_OPEN_APP,
  ORDER_NOW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_ORDER_NOW,
  PLAY: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_PLAY,
  READ: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_READ,
  SHOP: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOP,
  SHOW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOW,
  SHOWTIMES: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SHOWTIMES,
  SIGN_UP: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SIGN_UP,
  SUBSCRIBE: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_SUBSCRIBE,
  USE_APP: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_USE_APP,
  VIEW: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_VIEW,
  WATCH: LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH,
  WATCH_EPISODE:
    LocalizedStringId.AMP_STORY_AUTO_ADS_BUTTON_LABEL_WATCH_EPISODE,
};

/**
 * Util function to retrieve the localization service. Ensures we can retrieve
 * the service synchronously without running into race conditions.
 * @param {!Element} element
 * @return {!../../../src/service/localization.LocalizationService}
 */
const getLocalizationService = (element) => {
  let localizationService = Services.localizationForDoc(element);

  if (!localizationService) {
    localizationService = new LocalizationService(element);
    registerServiceBuilderForDoc(element, 'localization', function () {
      return localizationService;
    });
  }

  return localizationService;
};

export class StoryAdLocalization {
  /**
   * @param {!Element} storyAutoAdsEl
   */
  constructor(storyAutoAdsEl) {
    /** @private @const {!Element} */
    this.storyAutoAdsEl_ = storyAutoAdsEl;
    /** @private {?../../../src/service/localization.LocalizationService} */
    this.localizationService_ = null;
  }

  /**
   * @param {!../../../src/localized-strings.LocalizedStringId} id
   * @return {?string}
   */
  getLocalizedString(id) {
    if (!this.localizationService_) {
      this.init_();
    }
    return this.localizationService_.getLocalizedString(id);
  }

  /**
   * Create localization service and register all bundles.
   */
  init_() {
    this.localizationService_ = getLocalizationService(this.storyAutoAdsEl_);

    const enXaPseudoLocaleBundle = createPseudoLocale(
      LocalizedStringsEn,
      (s) => `[${s} one two]`
    );

    this.localizationService_
      .registerLocalizedStringBundle('default', LocalizedStringsEn)
      .registerLocalizedStringBundle('ar', LocalizedStringsAr)
      .registerLocalizedStringBundle('de', LocalizedStringsDe)
      .registerLocalizedStringBundle('en', LocalizedStringsEn)
      .registerLocalizedStringBundle('en-GB', LocalizedStringsEnGb)
      .registerLocalizedStringBundle('es', LocalizedStringsEs)
      .registerLocalizedStringBundle('es-419', LocalizedStringsEs419)
      .registerLocalizedStringBundle('fr', LocalizedStringsFr)
      .registerLocalizedStringBundle('hi', LocalizedStringsHi)
      .registerLocalizedStringBundle('id', LocalizedStringsId)
      .registerLocalizedStringBundle('it', LocalizedStringsIt)
      .registerLocalizedStringBundle('ja', LocalizedStringsJa)
      .registerLocalizedStringBundle('ko', LocalizedStringsKo)
      .registerLocalizedStringBundle('nl', LocalizedStringsNl)
      .registerLocalizedStringBundle('no', LocalizedStringsNo)
      .registerLocalizedStringBundle('pt-PT', LocalizedStringsPtPt)
      .registerLocalizedStringBundle('pt-BR', LocalizedStringsPtBr)
      .registerLocalizedStringBundle('ru', LocalizedStringsRu)
      .registerLocalizedStringBundle('tr', LocalizedStringsTr)
      .registerLocalizedStringBundle('vi', LocalizedStringsVi)
      .registerLocalizedStringBundle('zh-cn', LocalizedStringsZhCn)
      .registerLocalizedStringBundle('zh-TW', LocalizedStringsZhTw)
      .registerLocalizedStringBundle('en-xa', enXaPseudoLocaleBundle);
  }
}
