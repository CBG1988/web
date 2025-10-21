// az-landing.js
(function(){
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@600;700&display=swap');
    :host { display:block; }
    .wrap{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#0B1020;background:#FFFFFF;line-height:1.6}
    h1,h2,h3{font-family:Sora,Inter,sans-serif;line-height:1.2;margin:0 0 16px}
    h1{font-size:clamp(32px,5vw,56px);letter-spacing:-.02em} h2{font-size:clamp(24px,3vw,32px)}
    p{margin:0 0 16px;color:#1F2937} a{color:#1E3A8A;text-decoration:none} a:hover{text-decoration:underline}
    .container{width:min(1120px,92%);margin:0 auto}
    .btn{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:999px;border:1px solid transparent;font-weight:600}
    .btn-primary{background:#1E3A8A;color:#fff}.btn-primary:hover{filter:brightness(1.05)}
    .btn-secondary{background:transparent;color:#1E3A8A;border-color:#1E3A8A}
    .chip{display:inline-block;padding:6px 12px;border-radius:999px;background:#F3F4F6;color:#1F2937;font-size:14px}
    .nav{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:12px 0;border-bottom:1px solid #D1D5DB;background:#fff;position:sticky;top:0;z-index:2}
    .nav a{color:#0B1020;font-weight:500}.nav-links{display:flex;gap:18px;align-items:center}
    .lang-switch{display:flex;gap:8px;align-items:center}
    .lang-switch button{background:transparent;border:1px solid #D1D5DB;color:#1F2937;padding:6px 10px;border-radius:999px;cursor:pointer;font-weight:600}
    .lang-switch button[aria-current="true"]{background:#1E3A8A;border-color:#1E3A8A;color:#fff}
    .hero{padding:64px 0}
    .hero-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:48px;align-items:center}
    .hero-card{background:#F3F4F6;border:1px solid #D1D5DB;border-radius:12px;padding:32px;box-shadow:0 4px 16px rgba(2,10,32,0.08)}
    .logo-cloud{display:flex;flex-wrap:wrap;gap:16px;opacity:.8;align-items:center}
    .section{padding:64px 0}
    .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
    .grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:32px}
    .card{background:#fff;border:1px solid #D1D5DB;border-radius:12px;padding:32px;box-shadow:0 4px 16px rgba(2,10,32,0.08)}
    .stat{font-size:28px;font-weight:700;color:#1E3A8A}
    .kbar{background:#F3F4F6;border-top:1px solid #D1D5DB;border-bottom:1px solid #D1D5DB;padding:32px 0}
    .muted{color:#6B7280}
    @media (max-width:900px){.hero-grid{grid-template-columns:1fr}.grid-3,.grid-2{grid-template-columns:1fr}.nav-links{display:none}}
  `;

  const html = `
  <div class="wrap">
    <div class="container nav">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:28px;height:28px;border-radius:8px;background:#1E3A8A"></div>
        <a href="#"><strong>Charles BG</strong> · A–Z Automation</a>
      </div>
      <nav class="nav-links" aria-label="Primary">
        <a href="#services" data-i18n="nav.services">Services</a>
        <a href="#process" data-i18n="nav.process">Process</a>
        <a href="#cases" data-i18n="nav.cases">Case Studies</a>
        <a href="#about" data-i18n="nav.about">About</a>
        <a href="#contact" data-i18n="nav.contact">Contact</a>
      </nav>
      <div style="display:flex;align-items:center;gap:12px;">
        <div class="lang-switch">
          <button id="btn-en" aria-current="true">EN</button>
          <button id="btn-fr">FR</button>
        </div>
        <a href="#contact" class="btn btn-primary" data-i18n="cta.book">Book a Call</a>
      </div>
    </div>

    <section class="hero">
      <div class="container hero-grid">
        <div>
          <h1 data-i18n="hero.title">Automate More Than Tasks. Build Intelligence.</h1>
          <p data-i18n="hero.sub">End‑to‑end automation, data engineering, and analytics—built with Zapier, Make, Snowflake, and Tableau. From A to Z.</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px;">
            <a href="#contact" class="btn btn-primary" data-i18n="cta.book">Book a Call</a>
            <a href="#cases" class="btn btn-secondary" data-i18n="cta.cases">See Case Studies</a>
          </div>
          <div style="margin-top:24px;"><span class="chip" data-i18n="hero.trust">Previously at Ubisoft · TELUS · La Capitale</span></div>
        </div>
        <div class="hero-card">
          <h3 data-i18n="hero.kpiTitle">Business outcomes we deliver</h3>
          <div class="grid-2" style="margin-top:12px;">
            <div><div class="stat">10h+/wk</div><p class="muted" data-i18n="kpi.savetime">Saved via automated reporting</p></div>
            <div><div class="stat">0 errors</div><p class="muted" data-i18n="kpi.errors">Role-based data access & QA</p></div>
            <div><div class="stat">30,000+</div><p class="muted" data-i18n="kpi.views">Global dashboard views</p></div>
            <div><div class="stat">$72k/yr</div><p class="muted" data-i18n="kpi.savings">Retention savings from ML</p></div>
          </div>
        </div>
      </div>
      <div class="container" style="margin-top:36px;">
        <div class="logo-cloud">
          <span class="muted">Zapier</span><span class="muted">Make</span><span class="muted">Tableau</span>
          <span class="muted">Snowflake</span><span class="muted">Airtable</span><span class="muted">Notion</span>
          <span class="muted">Google Workspace</span><span class="muted">Jira</span><span class="muted">Adobe Campaign</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 data-i18n="problems.title">Sound familiar? Here’s what we fix.</h2>
        <div class="grid-3" style="margin-top:24px;">
          <div class="card"><h3 data-i18n="problems.p1">Endless copy‑paste between apps</h3><p data-i18n="problems.p1d">We connect your tools and remove manual steps.</p></div>
          <div class="card"><h3 data-i18n="problems.p2">Broken reporting & conflicting KPIs</h3><p data-i18n="problems.p2d">We build a clean data layer and single source of truth.</p></div>
          <div class="card"><h3 data-i18n="problems.p3">Security & access headaches</h3><p data-i18n="problems.p3d">Hierarchical, role-based access and auditability.</p></div>
        </div>

        <h2 style="margin-top:48px;" data-i18n="outcomes.title">What you get</h2>
        <div class="grid-3" style="margin-top:24px;">
          <div class="card"><h3 data-i18n="outcomes.o1">Data foundation first</h3><p data-i18n="outcomes.o1d">Warehousing, models, quality checks.</p></div>
          <div class="card"><h3 data-i18n="outcomes.o2">Decision‑ready dashboards</h3><p data-i18n="outcomes.o2d">Tableau KPIs, alerts, self‑serve analytics.</p></div>
          <div class="card"><h3 data-i18n="outcomes.o3">Automations that scale</h3><p data-i18n="outcomes.o3d">Zapier/Make scenarios with monitoring.</p></div>
        </div>
      </div>
    </section>

    <section id="services" class="section">
      <div class="container">
        <h2 data-i18n="services.title">Services</h2>
        <p data-i18n="services.sub">Organized by outcomes—not tools.</p>
        <div class="grid-3" style="margin-top:24px;">
          <div class="card"><h3 data-i18n="svc.sales">Sales & RevOps Automation</h3><p data-i18n="svc.salesd">Lead capture → CRM, enrichment, routing, SLAs, follow‑ups.</p></div>
          <div class="card"><h3 data-i18n="svc.mops">Marketing Intelligence & Ops</h3><p data-i18n="svc.mopsd">Segmentation, churn/propensity, campaign data pipelines, reporting.</p></div>
          <div class="card"><h3 data-i18n="svc.hr">HR Analytics & Operations</h3><p data-i18n="svc.hrd">Manager dashboards (turnover, leave, training), role‑based access.</p></div>
          <div class="card"><h3 data-i18n="svc.ops">Operations & Finance</h3><p data-i18n="svc.opsd">On/offboarding, invoice processing, capacity dashboards.</p></div>
          <div class="card"><h3 data-i18n="svc.data">Data Foundation (A→Z)</h3><p data-i18n="svc.datad">Snowflake warehouse, ETL/ELT, models, quality, governance.</p></div>
          <div class="card"><h3 data-i18n="svc.bi">BI & Dashboards</h3><p data-i18n="svc.bid">Tableau KPIs, alerts, self‑serve; training & playbooks.</p></div>
        </div>
      </div>
    </section>

    <section id="process" class="section">
      <div class="container">
        <h2 data-i18n="process.title">How it works</h2>
        <div class="grid-3" style="margin-top:24px;">
          <div class="card"><strong>1 · </strong><span data-i18n="proc.1">Discovery (30 min): goals, systems, constraints</span></div>
          <div class="card"><strong>2 · </strong><span data-i18n="proc.2">Architecture: data model, integration plan, security, KPIs</span></div>
          <div class="card"><strong>3 · </strong><span data-i18n="proc.3">Build: pipelines, automations, dashboards, tests</span></div>
          <div class="card"><strong>4 · </strong><span data-i18n="proc.4">Launch: training, docs, hypercare</span></div>
          <div class="card"><strong>5 · </strong><span data-i18n="proc.5">Evolve: iteration, QA, new use cases</span></div>
        </div>
      </div>
    </section>

    <section id="cases" class="section">
      <div class="container">
        <h2 data-i18n="cases.title">Case Studies</h2>
        <div class="grid-3" style="margin-top:24px;">
          <article class="card">
            <h3 data-i18n="case1.title">Global Game Studio — HR Platform</h3>
            <p data-i18n="case1.body">Designed HR Live with role-based access and manager dashboards (turnover, leave, training). 100+ HR users; automated weekly emails.</p>
            <p class="muted"><strong>Stack:</strong> Tableau, Snowflake, Dataflow</p>
          </article>
          <article class="card">
            <h3 data-i18n="case2.title">COVID Office Occupancy</h3>
            <p data-i18n="case2.body">End‑to‑end data pipeline and dashboard. Adopted globally; 30,000+ views; standardized decisions.</p>
            <p class="muted"><strong>Stack:</strong> Tableau</p>
          </article>
          <article class="card">
            <h3 data-i18n="case3.title">Telecom — Churn & Targeting</h3>
            <p data-i18n="case3.body">Churn models and automated campaign targeting; fuzzy matching for new leads. $72k+/yr retention savings; –50% reporting time.</p>
            <p class="muted"><strong>Stack:</strong> Alteryx, SQL, Adobe Campaign</p>
          </article>
        </div>
      </div>
    </section>

    <section class="kbar">
      <div class="container" style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;">
        <h3 style="margin:0;" data-i18n="ctaBar.title">Ready to automate your growth?</h3>
        <a href="#contact" class="btn btn-primary" data-i18n="cta.book">Book a Call</a>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <h2 data-i18n="about.title">About</h2>
        <div class="grid-2" style="margin-top:24px;">
          <div>
            <p data-i18n="about.body">I’m Charles Benoit‑Gagnon, a consultant in Québec building automation and analytics end‑to‑end. Experience at Ubisoft (game & HR analytics), TELUS (customer intelligence), La Capitale (marketing ops). I also teach supervised learning and AI ecosystem design. Mission: give SMBs enterprise‑grade automation and analytics—from architecture to insights.</p>
            <p><strong>Email:</strong> <a href="mailto:Charles.Benoit-Gagnon@USherbrooke.ca">Charles.Benoit-Gagnon@USherbrooke.ca</a><br/>
               <strong>Phone:</strong> <a href="tel:+15818883883">+1 581‑888‑3883</a></p>
          </div>
          <div class="card">
            <h3 data-i18n="about.expertise">Expertise</h3>
            <ul>
              <li data-i18n="about.e1">Data warehousing (Snowflake), ETL/ELT, modeling</li>
              <li data-i18n="about.e2">Automation with Zapier/Make</li>
              <li data-i18n="about.e3">BI with Tableau; KPI suites; access models</li>
              <li data-i18n="about.e4">ML: segmentation, churn, supervised learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container">
        <h2 data-i18n="contact.title">Book Your Free 30‑Minute Automation Strategy Call</h2>
        <p data-i18n="contact.sub">Bring 1–2 processes; leave with 3 concrete opportunities.</p>
        <div class="grid-2" style="margin-top:24px;">
          <div>
            <!-- If Calendly script conflicts, use Wix Calendly app; fallback to iframe: -->
            <iframe src="https://calendly.com/YOUR_CALENDLY_URL?hide_event_type_details=1&hide_gdpr_banner=1" style="width:100%;height:700px;border:0" title="Book a call"></iframe>
          </div>
          <form class="card" aria-label="Contact form">
            <div style="display:grid;gap:12px;">
              <label><span data-i18n="form.nameL">Name</span><input required name="name" style="width:100%;padding:12px;border:1px solid #D1D5DB;border-radius:8px;"></label>
              <label><span data-i18n="form.emailL">Email</span><input required type="email" name="email" style="width:100%;padding:12px;border:1px solid #D1D5DB;border-radius:8px;"></label>
              <label><span data-i18n="form.companyL">Company</span><input name="company" style="width:100%;padding:12px;border:1px solid #D1D5DB;border-radius:8px;"></label>
              <label><span data-i18n="form.messageL">Message</span><textarea name="message" rows="5" style="width:100%;padding:12px;border:1px solid #D1D5DB;border-radius:8px;"></textarea></label>
              <button class="btn btn-primary" type="submit" data-i18n="form.send">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <p class="muted">© <span id="year"></span> Charles Benoit‑Gagnon. All rights reserved.</p>
      </div>
    </footer>
  </div>
  `;

  const dict = {
    en: {"nav.services":"Services","nav.process":"Process","nav.cases":"Case Studies","nav.about":"About","nav.contact":"Contact","cta.book":"Book a Call","cta.cases":"See Case Studies","hero.title":"Automate More Than Tasks. Build Intelligence.","hero.sub":"End‑to‑end automation, data engineering, and analytics—built with Zapier, Make, Snowflake, and Tableau. From A to Z.","hero.trust":"Previously at Ubisoft · TELUS · La Capitale","hero.kpiTitle":"Business outcomes we deliver","kpi.savetime":"Saved via automated reporting","kpi.errors":"Role-based data access & QA","kpi.views":"Global dashboard views","kpi.savings":"Retention savings from ML","problems.title":"Sound familiar? Here’s what we fix.","problems.p1":"Endless copy‑paste between apps","problems.p1d":"We connect your tools and remove manual steps.","problems.p2":"Broken reporting & conflicting KPIs","problems.p2d":"We build a clean data layer and single source of truth.","problems.p3":"Security & access headaches","problems.p3d":"Hierarchical, role-based access and auditability.","outcomes.title":"What you get","outcomes.o1":"Data foundation first","outcomes.o1d":"Warehousing, models, quality checks.","outcomes.o2":"Decision‑ready dashboards","outcomes.o2d":"Tableau KPIs, alerts, self‑serve analytics.","outcomes.o3":"Automations that scale","outcomes.o3d":"Zapier/Make scenarios with monitoring.","services.title":"Services","services.sub":"Organized by outcomes—not tools.","svc.sales":"Sales & RevOps Automation","svc.salesd":"Lead capture → CRM, enrichment, routing, SLAs, follow‑ups.","svc.mops":"Marketing Intelligence & Ops","svc.mopsd":"Segmentation, churn/propensity, campaign data pipelines, reporting.","svc.hr":"HR Analytics & Operations","svc.hrd":"Manager dashboards (turnover, leave, training), role‑based access.","svc.ops":"Operations & Finance","svc.opsd":"On/offboarding, invoice processing, capacity dashboards.","svc.data":"Data Foundation (A→Z)","svc.datad":"Snowflake warehouse, ETL/ELT, models, quality, governance.","svc.bi":"BI & Dashboards","svc.bid":"Tableau KPIs, alerts, self‑serve; training & playbooks.","process.title":"How it works","proc.1":"Discovery (30 min): goals, systems, constraints","proc.2":"Architecture: data model, integration plan, security, KPIs","proc.3":"Build: pipelines, automations, dashboards, tests","proc.4":"Launch: training, docs, hypercare","proc.5":"Evolve: iteration, QA, new use cases","cases.title":"Case Studies","case1.title":"Global Game Studio — HR Platform","case1.body":"Designed HR Live with role-based access and manager dashboards (turnover, leave, training). 100+ HR users; automated weekly emails.","case2.title":"COVID Office Occupancy","case2.body":"End‑to‑end data pipeline and dashboard. Adopted globally; 30,000+ views; standardized decisions.","case3.title":"Telecom — Churn & Targeting","case3.body":"Churn models and automated campaign targeting; fuzzy matching for new leads. $72k+/yr retention savings; –50% reporting time.","ctaBar.title":"Ready to automate your growth?","about.title":"About","about.body":"I’m Charles Benoit‑Gagnon, a consultant in Québec building automation and analytics end‑to‑end. Experience at Ubisoft (game & HR analytics), TELUS (customer intelligence), La Capitale (marketing ops). I also teach supervised learning and AI ecosystem design. Mission: give SMBs enterprise‑grade automation and analytics—from architecture to insights.","about.expertise":"Expertise","about.e1":"Data warehousing (Snowflake), ETL/ELT, modeling","about.e2":"Automation with Zapier/Make","about.e3":"BI with Tableau; KPI suites; access models","about.e4":"ML: segmentation, churn, supervised learning","contact.title":"Book Your Free 30‑Minute Automation Strategy Call","contact.sub":"Bring 1–2 processes; leave with 3 concrete opportunities.","form.nameL":"Name","form.emailL":"Email","form.companyL":"Company","form.messageL":"Message","form.send":"Send"},
    fr: {"nav.services":"Services","nav.process":"Processus","nav.cases":"Cas d’usage","nav.about":"À propos","nav.contact":"Contact","cta.book":"Réserver un appel","cta.cases":"Voir les cas d’usage","hero.title":"Au‑delà de l’automatisation. Créez de l’intelligence.","hero.sub":"Automatisation, ingénierie des données et analytics, de bout en bout—avec Zapier, Make, Snowflake et Tableau. De A à Z.","hero.trust":"Expériences chez Ubisoft · TELUS · La Capitale","hero.kpiTitle":"Résultats concrets","kpi.savetime":"Gains via rapports automatisés","kpi.errors":"Accès par rôle & contrôle qualité","kpi.views":"Vues globales de tableaux de bord","kpi.savings":"Économies de rétention grâce au ML","problems.title":"Ça vous parle ? Voici ce que nous réglons.","problems.p1":"Copier‑coller sans fin entre applis","problems.p1d":"Nous connectons vos outils et supprimons le manuel.","problems.p2":"Reporting cassé & KPIs contradictoires","problems.p2d":"Nous bâtissons une couche de données fiable.","problems.p3":"Problèmes d’accès & de sécurité","problems.p3d":"Accès hiérarchique, par rôle, traçabilité.","outcomes.title":"Ce que vous obtenez","outcomes.o1":"Fondation données d’abord","outcomes.o1d":"Entrepôt, modèles, contrôles qualité.","outcomes.o2":"Tableaux prêts pour la décision","outcomes.o2d":"KPIs Tableau, alertes, self‑service.","outcomes.o3":"Automatisations à l’échelle","outcomes.o3d":"Scénarios Zapier/Make avec monitoring.","services.title":"Services","services.sub":"Pensés par résultats—pas par outils.","svc.sales":"Automatisation Ventes & RevOps","svc.salesd":"Capture → CRM, enrichissement, routage, SLAs, relances.","svc.mops":"Marketing Intelligence & Ops","svc.mopsd":"Segmentation, churn/propension, pipelines campagnes, reporting.","svc.hr":"Analytics & opérations RH","svc.hrd":"Dashboards managers (rotation, congés, formation), accès par rôle.","svc.ops":"Opérations & Finance","svc.opsd":"On/offboarding, factures, tableaux de capacité.","svc.data":"Fondation de données (A→Z)","svc.datad":"Entrepôt Snowflake, ETL/ELT, modèles, qualité, gouvernance.","svc.bi":"BI & Tableaux de bord","svc.bid":"KPIs Tableau, alertes, self‑service; formation.","process.title":"Notre processus","proc.1":"Découverte (30 min) : objectifs, systèmes, contraintes","proc.2":"Architecture : modèle, intégrations, sécurité, KPIs","proc.3":"Build : pipelines, automatisations, dashboards, tests","proc.4":"Lancement : formation, docs, hypercare","proc.5":"Évolution : itérations, QA, nouveaux cas","cases.title":"Cas d’usage","case1.title":"Studio de jeux — Plateforme RH","case1.body":"HR Live avec accès par rôle et dashboards managers (rotation, congés, formation). 100+ utilisateurs RH; e‑mails hebdo automatisés.","case2.title":"Occupation des bureaux (COVID)","case2.body":"Pipeline de données + dashboard bout en bout. Adoption mondiale; 30 000+ vues; décisions harmonisées.","case3.title":"Télécom — Churn & Ciblage","case3.body":"Modèles de churn et ciblage automatisé; fuzzy matching. 72 k$ / an d’économies; –50% temps de reporting.","ctaBar.title":"Prêt à automatiser votre croissance ?","about.title":"À propos","about.body":"Je suis Charles Benoit‑Gagnon, consultant à Québec. J’accompagne de bout en bout en automatisation et analytics. Expériences chez Ubisoft (analytics jeu & RH), TELUS (intelligence client) et La Capitale (marketing ops). J’enseigne l’apprentissage supervisé et la conception d’écosystèmes IA. Ma mission : offrir aux PME une puissance d’automatisation et d’analytics de niveau entreprise.","about.expertise":"Expertises","about.e1":"Entrepôt (Snowflake), ETL/ELT, modélisation","about.e2":"Automatisation avec Zapier/Make","about.e3":"BI avec Tableau; suites de KPIs; modèles d’accès","about.e4":"ML : segmentation, churn, supervisé","contact.title":"Réservez votre appel stratégique gratuit de 30 minutes","contact.sub":"Venez avec 1–2 processus; repartez avec 3 opportunités concrètes.","form.nameL":"Nom","form.emailL":"Email","form.companyL":"Entreprise","form.messageL":"Message","form.send":"Envoyer"}
  };

  class AZLanding extends HTMLElement {
    constructor(){ super(); this._lang = 'en'; }
    connectedCallback(){
      this._root = this.attachShadow({mode:'open'});
      const style = document.createElement('style'); style.textContent = css;
      this._root.appendChild(style);
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      this._root.appendChild(wrapper);

      this._applyLang(localStorage.getItem('az-lang') || 'en');

      const enBtn = this._root.getElementById('btn-en');
      const frBtn = this._root.getElementById('btn-fr');
      enBtn.addEventListener('click', ()=>this._applyLang('en'));
      frBtn.addEventListener('click', ()=>this._applyLang('fr'));

      const yearEl = this._root.querySelector('#year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    }

    _applyLang(lang){
      this._lang = lang;
      localStorage.setItem('az-lang', lang);
      const nodes = this._root.querySelectorAll('[data-i18n]');
      nodes.forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if (dict[lang] && dict[lang][key]) el.textContent = dict[lang][key];
      });
      this._root.getElementById('btn-en').setAttribute('aria-current', lang==='en');
      this._root.getElementById('btn-fr').setAttribute('aria-current', lang==='fr');
    }
  }

  window.customElements.define('az-landing', AZLanding);
})();
