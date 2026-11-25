function updateBtlCalc() {
      var el = document.getElementById('btlFreq');
      var out = document.getElementById('btlCalcOut');
      if (!el || !out) return;
      var n = parseInt(el.value || '10', 10);
      var packSave = n * 20;
      var stoneSave = n * 35;
      var extraMin = n * 10;
      var totalVal = packSave + stoneSave;
      var lang = document.documentElement.getAttribute('data-lang') || 'en';
      if (lang === 'es') {
        out.textContent = 'Con ' + n + ' sesiones/año en el Pase Familiar ($95/sesión): Ahorra $' + packSave + ' en sesiones + $' + stoneSave + ' en piedras calientes gratis + recibe ' + extraMin + ' minutos extra de masaje real vs. cadenas de 50 min ($' + totalVal + '+ en valor total, $0 contrato mensual).';
      } else {
        out.textContent = 'With ' + n + ' sessions/yr on our 5-Pack ($95/session): You save $' + packSave + ' off single rates + $' + stoneSave + ' in free hot stones + gain ' + extraMin + ' extra hands-on minutes vs. 50-min spa chains ($' + totalVal + '+ total value, $0 contract).';
      }
    }

    (function initBilingualAndWebMCP() {
      var freqSel = document.getElementById('btlFreq');
      if (freqSel) { freqSel.addEventListener('change', updateBtlCalc); }
      if (navigator.modelContext && typeof navigator.modelContext.registerTool === 'function') {
        fetch('/api/tools.json').then(function(r){return r.json();}).then(function(m){
          (m.tools || []).forEach(function(t){
            try { navigator.modelContext.registerTool(t); } catch(e) {}
          });
        }).catch(function(){});
      }
      var esMap = {
        'Treatment of Headaches': 'Tratamiento de Dolores de Cabeza',
        'Tension & Cervicogenic Headaches': 'Dolores de Cabeza Tensionales y Cervicogénicos',
        'Suboccipital & Neck Release': 'Liberación Suboccipital y Cervical',
        'Jaw / TMJ Comfort': 'Alivio Mandibular / ATM',
        'Clinical Focus: Treatment of Headaches (Suboccipital, Cervical & Myofascial Care)': 'Enfoque Clínico: Tratamiento de Dolores de Cabeza (Cuidado Suboccipital, Cervical y Miofascial)',
        'Massage Services & Areas of Focus': 'Servicios de Masaje y Áreas de Enfoque',
        'In-Home Massage Rates': 'Tarifas de Masaje a Domicilio',
        'In-Home Massage Rates': 'Paquetes de Masaje Terapéutico a Domicilio',
        'Clear & Transparent Rates': 'Tarifas Claras y Transparentes',
        '60-Min Restorative': '60-Min Restaurador',
        '90-Min Deep Recovery': '90-Min Recuperación Profunda',
        '5-Session Family Pass': 'Pase Familiar de 5 Sesiones',
        'Most Popular Sanctuary': 'El Más Popular',
        'How Our Rates & Value Compare to Franchise Spas & Mobile Apps': 'Cómo Se Comparan Nuestros Precios y Servicios en la Economía Actual',
        'Reserve Your In-Home Sanctuary': 'Reserve Su Masaje Terapéutico a Domicilio',
        'Check availability': 'Consultar Disponibilidad',
        'Real-World Clinical & Restorative Specialties': 'Especialidades Clínicas y Restauradoras',
        'Interactive Value Calculator: See What You Gain Each Year': 'Calculadora de Ahorro Anual: Vea Cuánto Gana y Ahorra',
        'Sessions per year:': 'Sesiones por año:'
      };
      var revMap = {};
      Object.keys(esMap).forEach(function(k){ revMap[esMap[k]] = k; });

      var bar = document.createElement('aside');
      bar.setAttribute('aria-label', 'Language selector / Selector de idioma');
      bar.style.cssText = 'position:fixed;bottom:88px;left:18px;z-index:9999;background:#fff7ed;color:#1c1917;padding:8px 14px;border-radius:999px;box-shadow:0 8px 24px rgba(0,0,0,0.22);font-size:0.84rem;font-weight:700;display:flex;align-items:center;gap:8px;border:2px solid #b45309;';
      var btnEn = document.createElement('button');
      btnEn.type = 'button';
      btnEn.textContent = 'EN';
      btnEn.style.cssText = 'background:#b45309;color:#fff;border:none;border-radius:999px;padding:4px 10px;cursor:pointer;font-weight:800;font-size:0.8rem;';
      var btnEs = document.createElement('button');
      btnEs.type = 'button';
      btnEs.textContent = 'Español (ES)';
      btnEs.style.cssText = 'background:transparent;color:#1c1917;border:1px solid #1c1917;border-radius:999px;padding:4px 10px;cursor:pointer;font-weight:800;font-size:0.8rem;';
      bar.appendChild(btnEn);
      bar.appendChild(btnEs);
      document.body.appendChild(bar);

      function applyLang(lang) {
        document.documentElement.setAttribute('data-lang', lang);
        var dict = lang === 'es' ? esMap : revMap;
        document.querySelectorAll('h1,h2,h3,h4,span,p,label,button,th,td,div').forEach(function(el) {
          if (el.children.length === 0) {
            var txt = (el.textContent || '').trim();
            if (dict[txt]) el.textContent = dict[txt];
          }
        });
        btnEn.style.background = lang === 'en' ? '#b45309' : 'transparent';
        btnEs.style.background = lang === 'es' ? '#b45309' : 'transparent';
        btnEs.style.color = '#fff';
        updateBtlCalc();
        try { localStorage.setItem('btl_lang', lang); } catch(e) {}
      }
      btnEn.addEventListener('click', function() { applyLang('en'); });
      btnEs.addEventListener('click', function() { applyLang('es'); });
      var qLang = new URLSearchParams(location.search).get('lang');
      var saved = null;
      try { saved = localStorage.getItem('btl_lang'); } catch(e) {}
      if (qLang === 'es' || saved === 'es') applyLang('es');
    })();
