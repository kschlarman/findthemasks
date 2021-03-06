const locales = {
  "qqq": "i18n/qqq.json",
  "en": "i18n/en.json",
  "fr": "i18n/fr-fr.json",
  "fr-FR": "i18n/fr-fr.json",
  "de": "i18n/de-de.json",
  "de-DE": "i18n/de-de.json",
  "it": "i18n/it-it.json",
  "it-IT": "i18n/it-it.json",
};

$(function () {
  const searchParams = new URLSearchParams((new URL(window.location)).search);
  const locale = searchParams.get('locale');

  const init = function () {
    // translate static elements and initialize translations
    // then, remove spinner and show page content
    $('.i18n').i18n();
    window.i18nReady = true;
    $('html').trigger('i18n:ready');
    $('.translated-content').css({ display: 'block' });
    $('.languages-loading').css({ display: 'none' });
  };

  if (locale) {
    $.i18n({ locale: locale }).load(locales).done(init);
  } else {
    $.i18n().load(locales).done(init);
  }
});
