import Vue from 'vue';
import Vuex from 'vuex';
import { Tag } from '@/model/model'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    conversations: [{
        id: 0,
        name: "Herr Meier",
        messages: [
          {
            id: 0,
            origin: "Herr Meier",
            type: "E-Mail",
            subject: "Subject Sample A",
            content: "Hallo Herr Anwalt",
            date: "18.10.2019 um 7.31",
            tags: [
              { name: "Mindestlohn" },
              { name: "Schwangerschaft" },
              { name: "Befristung" }
            ] as Tag[]
          },
          {
            id: 1,
            origin: "Ich",
            type: "E-Mail",
            subject: "Subject Sample B",
            content: "Hallo Herr Meier!",
            date: "19.10.2019 um 9.39",
            tags: [
              { name: "Mindestlohn" },
              { name: "Schwangerschaft" }
            ] as Tag[]
          },
          {
            id: 2,
            origin: "Herr Meier",
            subject: "Subject Sample C",
            type: "E-Mail",
            content: "Ich habe eine Frage ...",
            date: "19.10.2019 um 10.20",
            tags: [
              { name: "Mindestlohn" },
              { name: "Schwangerschaft" }
            ] as Tag[]
          }
        ]
    }, {
      id: 1,
      name: "Frau Winkelfrau",
      messages: [
        {
          id: 0,
          origin: "Ich",
          type: "E-Mail",
          subject: "Subject Sample A",
          content: '<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c2{background-color:#ffffff;max-width:451.4pt;padding:72pt 72pt 72pt 72pt}.c3{height:11pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c2"><p class="c1"><span class="c0">Sehr geehrte Frau Mandantin,</span></p><p class="c1 c3"><span class="c0"></span></p><p class="c1"><span class="c0">ich habe Ihren Entwurf gepr&uuml;ft und folgenden Anpassungsbedarf festgestellt:</span></p><p class="c1"><span class="c0">Die H&ouml;he der Verg&uuml;tung von 8,84 &euro; entspricht nicht (mehr) dem gesetzlich vorgeschriebenen Mindestlohn, vgl. &sect; 1 Mindestlohngesetz (MiLoG) i.V.m. &sect; 1 Zweite Mindestlohnanpassungsverordnung (MiLoV2).</span></p><p class="c1"><span class="c0">Ich schlage folgende Umformulierung des &sect; 6 &ldquo;Verg&uuml;tung&rdquo; vor:</span></p><p class="c1"><span class="c0">&ldquo;Die Mitarbeiterin erh&auml;lt eine Verg&uuml;tung in H&ouml;he von 9,19 &euro; brutto pro Stunde.&rdquo;</span></p><p class="c1"><span class="c0">Bitte beachten Sie: Die H&ouml;he des Mindestlohnes wird gem. &sect; 1 MiLoV2 ab dem 1.1.2020 9,35 &euro; betragen und k&ouml;nnte sich k&uuml;nftig erneut &auml;ndern!</span></p><p class="c1 c3"><span class="c0"></span></p><p class="c1"><span class="c0">Mit freundlichen Gr&uuml;&szlig;en</span></p><p class="c1 c3"><span class="c0"></span></p><p class="c1"><span class="c0">Smart</span></p><p class="c1"><span class="c0">Rechtsanwalt</span></p></body></html>',
          date: "23.04.2017 um 10:09",
          tags: [
            { name: "Mindestlohn" },
            { name: "Schwangerschaft" }
          ] as Tag[]
        },
        {
          id: 1,
          origin: "Frau Winkelfrau",
          type: "E-Mail",
          subject: "Subject Sample B",
          content: '<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c1{padding-top:0pt;border-top-width:0pt;border-bottom-color:null;padding-bottom:0pt;line-height:1.15;border-top-style:solid;border-bottom-width:0pt;border-top-color:null;border-bottom-style:solid;orphans:2;widows:2;text-align:left}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c3{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c2{background-color:#ffffff;max-width:451.4pt;padding:72pt 72pt 72pt 72pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c2"><p class="c1"><span class="c0">Sehr geehrter Herr Rechtsanwalt Smart,</span></p><p class="c1"><span class="c0">bitte pr&uuml;fen Sie beigef&uuml;gten Entwurf f&uuml;r einen Arbeitsvertrag, ob dieser so einer neuen Mitarbeiterin vorgelegt werden kann.</span></p><p class="c1"><span class="c0">VG</span></p><p class="c1"><span class="c0">Frau Mandantin</span></p><p class="c3"><span class="c0"></span></p></body></html>',
          date: "24.04.2017 um 18:33",
          tags: [
            { name: "Mindestlohn" },
            { name: "Schwangerschaft" }
          ] as Tag[]
        }
      ]
  }],
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
