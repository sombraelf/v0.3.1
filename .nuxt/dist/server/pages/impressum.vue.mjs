import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useHead } from "../node_modules/nuxt/dist/head/runtime/composables/v3.mjs";
const _sfc_main = {
  __name: "impressum",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Impressum - SorglosPflege",
      meta: [
        { name: "description", content: "Impressum der SorglosPflege UG (haftungsbeschränkt). Hier finden Sie alle rechtlich relevanten Informationen zu unserem Unternehmen." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-light-bg py-12 min-h-screen" }, _attrs))}><div class="container mx-auto px-4"><div class="component-container mx-auto"><h1 class="text-3xl md:text-4xl font-bold mb-8 text-primary">Impressum</h1><div class="bg-white rounded-lg shadow-md p-6 md:p-8"><h2 class="text-2xl font-semibold mb-6 text-primary">Angaben gemäß § 5 TMG</h2><div class="space-y-6"><div><h3 class="text-xl font-medium mb-2">Unternehmen</h3><p>SorglosPflege UG (haftungsbeschränkt)</p><p>Musterstraße 123</p><p>12345 Berlin</p><p>Deutschland</p></div><div><h3 class="text-xl font-medium mb-2">Kontakt</h3><p>Telefon: +49 (0) 123 456 78</p><p>E-Mail: info@sorglos-pflege.de</p></div><div><h3 class="text-xl font-medium mb-2">Vertretungsberechtigte Person</h3><p>Max Mustermann (Geschäftsführer)</p></div><div><h3 class="text-xl font-medium mb-2">Registereintrag</h3><p>Eintragung im Handelsregister</p><p>Registergericht: Amtsgericht Berlin-Charlottenburg</p><p>Registernummer: HRB 123456</p></div><div><h3 class="text-xl font-medium mb-2">Umsatzsteuer-ID</h3><p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p><p>DE123456789</p></div><div><h3 class="text-xl font-medium mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3><p>Max Mustermann</p><p>SorglosPflege UG (haftungsbeschränkt)</p><p>Musterstraße 123</p><p>12345 Berlin</p><p>Deutschland</p></div><div><h3 class="text-xl font-medium mb-2">Streitschlichtung</h3><p> Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline"> https://ec.europa.eu/consumers/odr/ </a></p><p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p><p> Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. </p></div><div><h3 class="text-xl font-medium mb-2">Haftung für Inhalte</h3><p> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. </p><p> Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. </p></div><div><h3 class="text-xl font-medium mb-2">Haftung für Links</h3><p> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. </p><p> Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. </p></div><div><h3 class="text-xl font-medium mb-2">Urheberrecht</h3><p> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. </p><p> Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen. </p></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/impressum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=impressum.vue.mjs.map
