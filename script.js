// script.js

(function() {
    // ---------- MASTER COUNTRY LIST (exactly as provided) ----------
    const countryList = [
        "Australia", "Cambodia", "Hong Kong", "India",
        "Indonesia", "Japan", "Korea", "Mainland of China", "Malaysia",
        "Mongolia", "Myanmar", "Nepal", "New Zealand", "Pakistan",
        "Philippines", "Singapore", "Sri Lanka", "Taiwan", "Thailand",
        "Vietnam", "Turkey", "Egypt", "Kuwait", "UAE", "Uganda", "Tanzania",
        "Brazil", "USA"
    ];

    // ---------- LC DATA (some LCs per country; feel free to edit) ----------
    // For demo, each country gets 2–4 LCs. For countries not specified, we add generic ones.
    const countryLCs = {
        "Australia": ["LC Sydney", "LC Melbourne", "LC Brisbane"],
        "Cambodia": ["LC Phnom Penh", "LC Siem Reap"],
        "Hong Kong": ["LC Hong Kong", "LC Kowloon"],
        "India": ["LC Delhi", "LC Mumbai", "LC Bangalore", "LC Chennai"],
        "Indonesia": ["LC Jakarta", "LC Bandung", "LC Surabaya"],
        "Japan": ["LC Tokyo", "LC Osaka", "LC Kyoto"],
        "Korea": ["LC Seoul", "LC Busan"],
        "Mainland of China": ["LC Beijing", "LC Shanghai", "LC Guangzhou"],
        "Malaysia": ["LC Kuala Lumpur", "LC Penang"],
        "Mongolia": ["LC Ulaanbaatar"],
        "Myanmar": ["LC Yangon", "LC Mandalay"],
        "Nepal": ["LC Kathmandu", "LC Pokhara"],
        "New Zealand": ["LC Auckland", "LC Wellington"],
        "Pakistan": ["LC Karachi", "LC Lahore", "LC Islamabad"],
        "Philippines": ["LC Manila", "LC Cebu"],
        "Singapore": ["LC Singapore"],
        "Sri Lanka": ["LC Colombo", "LC Kandy"],
        "Taiwan": ["LC Taipei", "LC Kaohsiung"],
        "Thailand": ["LC Bangkok", "LC Chiang Mai", "LC Phuket"],
        "Vietnam": ["LC Hanoi", "LC Ho Chi Minh"],
        "Turkey": ["LC Ankara", "LC Istanbul", "LC Izmir", "LC Adana"],
        "Egypt": ["LC Cairo", "LC Alexandria", "LC Giza"],
        "Kuwait": ["LC Kuwait City"],
        "UAE": ["LC Dubai", "LC Abu Dhabi"],
        "Uganda": ["LC Kampala"],
        "Tanzania": ["LC Dar es Salaam", "LC Zanzibar"],
        "Brazil": ["LC São Paulo", "LC Rio", "LC Belo Horizonte"],
        "USA": ["LC New York", "LC San Francisco", "LC Chicago", "LC Boston"]
    };

    // ---------- BUILD COUNTRY BUTTONS AND LC CONTAINERS ----------
    const countryBtnContainer = document.getElementById('countryBtnContainer');
    const lcDynamicContainer = document.getElementById('lc-dynamic-container');

    // Clear any placeholder
    countryBtnContainer.innerHTML = '';
    lcDynamicContainer.innerHTML = '';

    // Create buttons and corresponding LC divs
    countryList.forEach((country, index) => {
        // button
        const btn = document.createElement('button');
        btn.className = 'country-btn';
        if (index === 0) btn.classList.add('active'); // first active
        btn.setAttribute('data-country', country);
        btn.textContent = country;
        countryBtnContainer.appendChild(btn);

        // create a container for this country's LCs (hidden by default)
        const countryDiv = document.createElement('div');
        countryDiv.id = `country-${country.replace(/\s+/g, '-')}`;
        countryDiv.className = 'lc-container';
        countryDiv.style.display = index === 0 ? 'block' : 'none'; // show first

        // build LC buttons for this country
        const lcs = countryLCs[country] || [`LC ${country} Main`, `LC ${country} North`]; // fallback

        // create grid for LCs
        const lcGrid = document.createElement('div');
        lcGrid.className = 'lc-grid';
        lcs.forEach(lcName => {
            const lcBtn = document.createElement('button');
            lcBtn.className = 'lc-btn';
            // placeholder link – in practice you'd set real google sheet links. We'll use a fake link with LC name.
            lcBtn.setAttribute('data-link', `https://docs.google.com/spreadsheets/d/${lcName.replace(/\s+/g,'')}`);
            lcBtn.textContent = lcName;
            lcGrid.appendChild(lcBtn);
        });
        countryDiv.appendChild(lcGrid);

        // create iGV / iGT panel (will be filled by JS when an LC is clicked)
        const igxPanel = document.createElement('div');
        igxPanel.className = 'igx-panel';
        igxPanel.id = `igx-${country.replace(/\s+/g, '-')}`;
        // initially empty, will be populated on LC click
        countryDiv.appendChild(igxPanel);

        lcDynamicContainer.appendChild(countryDiv);
    });

    // ---------- TOGGLE COUNTRY VISIBILITY ----------
    const countryBtns = document.querySelectorAll('.country-btn');
    const lcContainers = document.querySelectorAll('.lc-container');

    function showCountry(countryName) {
        lcContainers.forEach(container => {
            container.style.display = 'none';
        });
        const activeDiv = document.getElementById(`country-${countryName.replace(/\s+/g, '-')}`);
        if (activeDiv) activeDiv.style.display = 'block';

        // update button active class
        countryBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-country') === countryName) {
                btn.classList.add('active');
            }
        });
    }

    countryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const country = e.target.getAttribute('data-country');
            showCountry(country);
        });
    });

    // ---------- LC CLICK: SHOW iGV / iGT BUTTONS (with google sheet links) ----------
    // This function replaces the igx-panel with two buttons: iGV and iGT
    function setupLcClickHandlers() {
        document.querySelectorAll('.lc-btn').forEach(lcBtn => {
            lcBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // avoid interfering with redirect if needed
                const lcName = e.target.textContent;
                // find parent country container
                const countryContainer = e.target.closest('.lc-container');
                if (!countryContainer) return;
                const igxPanel = countryContainer.querySelector('.igx-panel');
                if (!igxPanel) return;

                // Clear previous igx buttons
                igxPanel.innerHTML = '';

                // Create iGV button with google sheets link (manually set later)
                const igvBtn = document.createElement('button');
                igvBtn.className = 'igx-btn igv';
                igvBtn.textContent = 'iGV';
                // Set link — you can change these per LC as needed. Currently generic.
                igvBtn.setAttribute('data-link', `https://docs.google.com/spreadsheets/d/iGV-${lcName.replace(/\s+/g,'')}`);

                // Create iGT button
                const igtBtn = document.createElement('button');
                igtBtn.className = 'igx-btn igt';
                igtBtn.textContent = 'iGT';
                igtBtn.setAttribute('data-link', `https://docs.google.com/spreadsheets/d/iGT-${lcName.replace(/\s+/g,'')}`);

                // Add click redirect for iGX buttons
                igvBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const link = igvBtn.getAttribute('data-link');
                    if (link) window.location.href = link;
                });
                igtBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const link = igtBtn.getAttribute('data-link');
                    if (link) window.location.href = link;
                });

                igxPanel.appendChild(igvBtn);
                igxPanel.appendChild(igtBtn);
            });
        });
    }

    // Also need to attach handlers to dynamically created LC buttons.
    // We'll call this after initial render, and also after any potential future changes.
    setupLcClickHandlers();

    // ---------- REDIRECT HANDLER for any button with data-link (global) ----------
    function handleRedirect(event) {
        const btn = event.currentTarget;
        const link = btn.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        } else {
            console.warn('no data-link found');
        }
    }

    // Attach to all existing and future .lc-btn, .action-btn, .step, .igx-btn? we added listeners separately for igx, but also attach generic.
    // We'll attach to .action-btn, .step, and also .lc-btn but lc already has custom; we can also attach but it's ok.
    document.querySelectorAll('.action-btn, .step').forEach(btn => {
        btn.addEventListener('click', handleRedirect);
    });

    // Re-attach LC handler after any potential dynamic changes (but we already set on existing ones)
    // Since we set directly, it's fine. But we also need to ensure newly created LC buttons get the redirect?
    // They already have custom listener to show iGX. But what if we also want them to redirect on click? They currently only show iGX, not redirect. The request: "when i click LC then it will show iGV and iGT". So redirect only happens when clicking iGV/iGT, not the LC itself. So lc-btn only shows iGX, doesn't redirect. We'll keep it that way.
    // However we might still want the original LC button to also have a link? Probably not. So we remove redirect from LC click.

    // But also we want the iGX buttons to redirect, which we added directly. Good.

    // Ensure any .igx-btn created later also get redirect? They are created in lc click, and we added listeners at creation time. Good.

    // small additional: to keep consistency, attach redirect to all .action-btn and .step (already done).

    // Also ensure calculator, quick access etc work — they are .action-btn.

    // additional: if any lc-btn accidentally gets global redirect, we remove by not attaching handleRedirect to .lc-btn. Good.

    // Now ensure first country is shown correctly
    // Already first is visible due to style inline.

    // Also fix for first load: the first country's LCs exist, but need iGV/iGT panel empty until LC click. That's fine.

})();