// script.js - with unique dummy links for each LC's programs

(function() {
    // ---------- MASTER COUNTRY LIST (exactly as provided) ----------
    const countryList = [
        "Australia", "Bangladesh", "Cambodia", "Hong Kong", "India",
        "Indonesia", "Japan", "Korea", "Mainland of China", "Malaysia",
        "Mongolia", "Myanmar", "Nepal", "New Zealand", "Pakistan",
        "Philippines", "Singapore", "Sri Lanka", "Taiwan", "Thailand",
        "Vietnam", "Turkey", "Egypt", "Kuwait", "UAE", "Uganda", "Tanzania",
        "Brazil", "USA"
    ];

    // ---------- LC DATA (some LCs per country; feel free to edit) ----------
    const countryLCs = {
        "Australia": ["LC Sydney", "LC Melbourne", "LC Brisbane"],
        "Bangladesh": ["LC Dhaka", "LC Chittagong", "LC NSU", "LC AIUB", "LC North South"],
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

    // ---------- UNIQUE DUMMY LINKS FOR EACH LC's PROGRAMS ----------
    // This object contains different dummy Google Sheet links for each LC's iGV, iGTa, and iGTe
    const lcProgramLinks = {
        // Australia
        "LC Sydney": {
            iGV: "https://docs.google.com/spreadsheets/d/1sydney-igv-2024-dummy",
            iGTa: "https://docs.google.com/spreadsheets/d/1sydney-igta-2024-dummy",
            iGTe: "https://docs.google.com/spreadsheets/d/1sydney-igte-2024-dummy"
        },
        "LC Melbourne": {
            iGV: "https://docs.google.com/spreadsheets/d/2melbourne-igv-2024-dummy",
            iGTa: "https://docs.google.com/spreadsheets/d/2melbourne-igta-2024-dummy",
            iGTe: "https://docs.google.com/spreadsheets/d/2melbourne-igte-2024-dummy"
        },
        "LC Brisbane": {
            iGV: "https://docs.google.com/spreadsheets/d/3brisbane-igv-2024-dummy",
            iGTa: "https://docs.google.com/spreadsheets/d/3brisbane-igta-2024-dummy",
            iGTe: "https://docs.google.com/spreadsheets/d/3brisbane-igte-2024-dummy"
        },
        // Bangladesh
        "LC Dhaka": {
            iGV: "https://docs.google.com/spreadsheets/d/bd-dhaka-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/bd-dhaka-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/bd-dhaka-igte-2024"
        },
        "LC Chittagong": {
            iGV: "https://docs.google.com/spreadsheets/d/bd-ctg-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/bd-ctg-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/bd-ctg-igte-2024"
        },
        "LC NSU": {
            iGV: "https://docs.google.com/spreadsheets/d/bd-nsu-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/bd-nsu-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/bd-nsu-igte-2024"
        },
        "LC AIUB": {
            iGV: "https://docs.google.com/spreadsheets/d/bd-aiub-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/bd-aiub-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/bd-aiub-igte-2024"
        },
        "LC North South": {
            iGV: "https://docs.google.com/spreadsheets/d/bd-northsouth-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/bd-northsouth-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/bd-northsouth-igte-2024"
        },
        // Cambodia
        "LC Phnom Penh": {
            iGV: "https://docs.google.com/spreadsheets/d/cam-pp-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/cam-pp-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/cam-pp-igte-2024"
        },
        "LC Siem Reap": {
            iGV: "https://docs.google.com/spreadsheets/d/cam-sr-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/cam-sr-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/cam-sr-igte-2024"
        },
        // Hong Kong
        "LC Hong Kong": {
            iGV: "https://docs.google.com/spreadsheets/d/hk-hk-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/hk-hk-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/hk-hk-igte-2024"
        },
        "LC Kowloon": {
            iGV: "https://docs.google.com/spreadsheets/d/hk-kowloon-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/hk-kowloon-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/hk-kowloon-igte-2024"
        },
        // India
        "LC Delhi": {
            iGV: "https://docs.google.com/spreadsheets/d/in-delhi-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/in-delhi-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/in-delhi-igte-2024"
        },
        "LC Mumbai": {
            iGV: "https://docs.google.com/spreadsheets/d/in-mumbai-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/in-mumbai-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/in-mumbai-igte-2024"
        },
        "LC Bangalore": {
            iGV: "https://docs.google.com/spreadsheets/d/in-blr-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/in-blr-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/in-blr-igte-2024"
        },
        "LC Chennai": {
            iGV: "https://docs.google.com/spreadsheets/d/in-chennai-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/in-chennai-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/in-chennai-igte-2024"
        },
        // Indonesia
        "LC Jakarta": {
            iGV: "https://docs.google.com/spreadsheets/d/id-jkt-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/id-jkt-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/id-jkt-igte-2024"
        },
        "LC Bandung": {
            iGV: "https://docs.google.com/spreadsheets/d/id-bdg-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/id-bdg-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/id-bdg-igte-2024"
        },
        "LC Surabaya": {
            iGV: "https://docs.google.com/spreadsheets/d/id-sby-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/id-sby-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/id-sby-igte-2024"
        },
        // Japan
        "LC Tokyo": {
            iGV: "https://docs.google.com/spreadsheets/d/jp-tokyo-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/jp-tokyo-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/jp-tokyo-igte-2024"
        },
        "LC Osaka": {
            iGV: "https://docs.google.com/spreadsheets/d/jp-osaka-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/jp-osaka-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/jp-osaka-igte-2024"
        },
        "LC Kyoto": {
            iGV: "https://docs.google.com/spreadsheets/d/jp-kyoto-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/jp-kyoto-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/jp-kyoto-igte-2024"
        },
        // Korea
        "LC Seoul": {
            iGV: "https://docs.google.com/spreadsheets/d/kr-seoul-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/kr-seoul-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/kr-seoul-igte-2024"
        },
        "LC Busan": {
            iGV: "https://docs.google.com/spreadsheets/d/kr-busan-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/kr-busan-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/kr-busan-igte-2024"
        },
        // Mainland of China
        "LC Beijing": {
            iGV: "https://docs.google.com/spreadsheets/d/cn-beijing-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/cn-beijing-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/cn-beijing-igte-2024"
        },
        "LC Shanghai": {
            iGV: "https://docs.google.com/spreadsheets/d/cn-shanghai-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/cn-shanghai-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/cn-shanghai-igte-2024"
        },
        "LC Guangzhou": {
            iGV: "https://docs.google.com/spreadsheets/d/cn-guangzhou-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/cn-guangzhou-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/cn-guangzhou-igte-2024"
        },
        // Malaysia
        "LC Kuala Lumpur": {
            iGV: "https://docs.google.com/spreadsheets/d/my-kl-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/my-kl-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/my-kl-igte-2024"
        },
        "LC Penang": {
            iGV: "https://docs.google.com/spreadsheets/d/my-pg-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/my-pg-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/my-pg-igte-2024"
        },
        // Mongolia
        "LC Ulaanbaatar": {
            iGV: "https://docs.google.com/spreadsheets/d/mn-ub-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/mn-ub-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/mn-ub-igte-2024"
        },
        // Myanmar
        "LC Yangon": {
            iGV: "https://docs.google.com/spreadsheets/d/mm-ygn-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/mm-ygn-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/mm-ygn-igte-2024"
        },
        "LC Mandalay": {
            iGV: "https://docs.google.com/spreadsheets/d/mm-mdy-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/mm-mdy-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/mm-mdy-igte-2024"
        },
        // Nepal
        "LC Kathmandu": {
            iGV: "https://docs.google.com/spreadsheets/d/np-ktm-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/np-ktm-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/np-ktm-igte-2024"
        },
        "LC Pokhara": {
            iGV: "https://docs.google.com/spreadsheets/d/np-pkr-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/np-pkr-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/np-pkr-igte-2024"
        },
        // New Zealand
        "LC Auckland": {
            iGV: "https://docs.google.com/spreadsheets/d/nz-akl-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/nz-akl-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/nz-akl-igte-2024"
        },
        "LC Wellington": {
            iGV: "https://docs.google.com/spreadsheets/d/nz-wlg-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/nz-wlg-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/nz-wlg-igte-2024"
        },
        // Pakistan
        "LC Karachi": {
            iGV: "https://docs.google.com/spreadsheets/d/pk-khi-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/pk-khi-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/pk-khi-igte-2024"
        },
        "LC Lahore": {
            iGV: "https://docs.google.com/spreadsheets/d/pk-lhe-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/pk-lhe-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/pk-lhe-igte-2024"
        },
        "LC Islamabad": {
            iGV: "https://docs.google.com/spreadsheets/d/pk-isb-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/pk-isb-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/pk-isb-igte-2024"
        },
        // Philippines
        "LC Manila": {
            iGV: "https://docs.google.com/spreadsheets/d/ph-mnl-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/ph-mnl-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/ph-mnl-igte-2024"
        },
        "LC Cebu": {
            iGV: "https://docs.google.com/spreadsheets/d/ph-ceb-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/ph-ceb-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/ph-ceb-igte-2024"
        },
        // Singapore
        "LC Singapore": {
            iGV: "https://docs.google.com/spreadsheets/d/sg-sg-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/sg-sg-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/sg-sg-igte-2024"
        },
        // Sri Lanka
        "LC Colombo": {
            iGV: "https://docs.google.com/spreadsheets/d/lk-cmb-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/lk-cmb-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/lk-cmb-igte-2024"
        },
        "LC Kandy": {
            iGV: "https://docs.google.com/spreadsheets/d/lk-kandy-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/lk-kandy-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/lk-kandy-igte-2024"
        },
        // Taiwan
        "LC Taipei": {
            iGV: "https://docs.google.com/spreadsheets/d/tw-tpe-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/tw-tpe-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/tw-tpe-igte-2024"
        },
        "LC Kaohsiung": {
            iGV: "https://docs.google.com/spreadsheets/d/tw-khh-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/tw-khh-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/tw-khh-igte-2024"
        },
        // Thailand
        "LC Bangkok": {
            iGV: "https://docs.google.com/spreadsheets/d/th-bkk-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/th-bkk-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/th-bkk-igte-2024"
        },
        "LC Chiang Mai": {
            iGV: "https://docs.google.com/spreadsheets/d/th-cnx-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/th-cnx-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/th-cnx-igte-2024"
        },
        "LC Phuket": {
            iGV: "https://docs.google.com/spreadsheets/d/th-hkt-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/th-hkt-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/th-hkt-igte-2024"
        },
        // Vietnam
        "LC Hanoi": {
            iGV: "https://docs.google.com/spreadsheets/d/vn-han-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/vn-han-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/vn-han-igte-2024"
        },
        "LC Ho Chi Minh": {
            iGV: "https://docs.google.com/spreadsheets/d/vn-sgn-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/vn-sgn-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/vn-sgn-igte-2024"
        },
        // Turkey
        "LC Ankara": {
            iGV: "https://docs.google.com/spreadsheets/d/tr-ank-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/tr-ank-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/tr-ank-igte-2024"
        },
        "LC Istanbul": {
            iGV: "https://docs.google.com/spreadsheets/d/tr-ist-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/tr-ist-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/tr-ist-igte-2024"
        },
        "LC Izmir": {
            iGV: "https://docs.google.com/spreadsheets/d/tr-izmir-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/tr-izmir-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/tr-izmir-igte-2024"
        },
        "LC Adana": {
            iGV: "https://docs.google.com/spreadsheets/d/tr-ada-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/tr-ada-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/tr-ada-igte-2024"
        },
        // Egypt
        "LC Cairo": {
            iGV: "https://docs.google.com/spreadsheets/d/eg-cai-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/eg-cai-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/eg-cai-igte-2024"
        },
        "LC Alexandria": {
            iGV: "https://docs.google.com/spreadsheets/d/eg-alx-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/eg-alx-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/eg-alx-igte-2024"
        },
        "LC Giza": {
            iGV: "https://docs.google.com/spreadsheets/d/eg-giz-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/eg-giz-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/eg-giz-igte-2024"
        },
        // Kuwait
        "LC Kuwait City": {
            iGV: "https://docs.google.com/spreadsheets/d/kw-kwi-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/kw-kwi-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/kw-kwi-igte-2024"
        },
        // UAE
        "LC Dubai": {
            iGV: "https://docs.google.com/spreadsheets/d/ae-dxb-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/ae-dxb-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/ae-dxb-igte-2024"
        },
        "LC Abu Dhabi": {
            iGV: "https://docs.google.com/spreadsheets/d/ae-auh-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/ae-auh-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/ae-auh-igte-2024"
        },
        // Uganda
        "LC Kampala": {
            iGV: "https://docs.google.com/spreadsheets/d/ug-kla-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/ug-kla-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/ug-kla-igte-2024"
        },
        // Tanzania
        "LC Dar es Salaam": {
            iGV: "https://docs.google.com/spreadsheets/d/tz-dar-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/tz-dar-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/tz-dar-igte-2024"
        },
        "LC Zanzibar": {
            iGV: "https://docs.google.com/spreadsheets/d/tz-zanz-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/tz-zanz-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/tz-zanz-igte-2024"
        },
        // Brazil
        "LC São Paulo": {
            iGV: "https://docs.google.com/spreadsheets/d/br-sp-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/br-sp-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/br-sp-igte-2024"
        },
        "LC Rio": {
            iGV: "https://docs.google.com/spreadsheets/d/br-rio-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/br-rio-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/br-rio-igte-2024"
        },
        "LC Belo Horizonte": {
            iGV: "https://docs.google.com/spreadsheets/d/br-bhz-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/br-bhz-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/br-bhz-igte-2024"
        },
        // USA
        "LC New York": {
            iGV: "https://docs.google.com/spreadsheets/d/us-nyc-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/us-nyc-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/us-nyc-igte-2024"
        },
        "LC San Francisco": {
            iGV: "https://docs.google.com/spreadsheets/d/us-sfo-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/us-sfo-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/us-sfo-igte-2024"
        },
        "LC Chicago": {
            iGV: "https://docs.google.com/spreadsheets/d/us-chi-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/us-chi-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/us-chi-igte-2024"
        },
        "LC Boston": {
            iGV: "https://docs.google.com/spreadsheets/d/us-bos-igv-2024",
            iGTa: "https://docs.google.com/spreadsheets/d/us-bos-igta-2024",
            iGTe: "https://docs.google.com/spreadsheets/d/us-bos-igte-2024"
        }
    };

    // ---------- BUILD COUNTRY BUTTONS AND LC CONTAINERS ----------
    const countryBtnContainer = document.getElementById('countryBtnContainer');
    const lcDynamicContainer = document.getElementById('lc-dynamic-container');

    countryBtnContainer.innerHTML = '';
    lcDynamicContainer.innerHTML = '';

    // Create buttons and corresponding LC divs
    countryList.forEach((country, index) => {
        // button
        const btn = document.createElement('button');
        btn.className = 'country-btn';
        if (index === 0) btn.classList.add('active');
        btn.setAttribute('data-country', country);
        btn.textContent = country;
        countryBtnContainer.appendChild(btn);

        // container for this country's LCs (hidden by default)
        const countryDiv = document.createElement('div');
        countryDiv.id = `country-${country.replace(/\s+/g, '-')}`;
        countryDiv.className = 'lc-container';
        countryDiv.style.display = index === 0 ? 'block' : 'none';

        // build LC buttons
        const lcs = countryLCs[country] || [`LC ${country} Main`, `LC ${country} North`];
        const lcGrid = document.createElement('div');
        lcGrid.className = 'lc-grid';
        lcs.forEach(lcName => {
            const lcBtn = document.createElement('button');
            lcBtn.className = 'lc-btn';
            lcBtn.setAttribute('data-lcname', lcName);
            lcBtn.textContent = lcName;
            lcGrid.appendChild(lcBtn);
        });
        countryDiv.appendChild(lcGrid);

        // iGX panel (will be populated on LC click)
        const igxPanel = document.createElement('div');
        igxPanel.className = 'igx-panel';
        igxPanel.id = `igx-${country.replace(/\s+/g, '-')}`;
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

    // ---------- LC CLICK: show iGV / iGTa / iGTe buttons with UNIQUE LINKS ----------
    function setupLcClickHandlers() {
        document.querySelectorAll('.lc-btn').forEach(lcBtn => {
            lcBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const lcName = e.target.textContent;
                const countryContainer = e.target.closest('.lc-container');
                if (!countryContainer) return;
                const igxPanel = countryContainer.querySelector('.igx-panel');
                if (!igxPanel) return;

                // Remove active class from all LC buttons in this country
                countryContainer.querySelectorAll('.lc-btn').forEach(btn => {
                    btn.classList.remove('active-lc');
                });
                // Add active class to clicked LC
                e.target.classList.add('active-lc');

                // Clear previous iGX buttons (replace, not append)
                igxPanel.innerHTML = '';

                // Create iGV button
                const igvBtn = document.createElement('button');
                igvBtn.className = 'igx-btn igv';
                igvBtn.textContent = 'iGV';

                // Create iGTa button
                const igtaBtn = document.createElement('button');
                igtaBtn.className = 'igx-btn igta';
                igtaBtn.textContent = 'iGTa';

                // Create iGTe button
                const igteBtn = document.createElement('button');
                igteBtn.className = 'igx-btn igte';
                igteBtn.textContent = 'iGTe';

                // Set unique links from lcProgramLinks object
                if (lcProgramLinks[lcName]) {
                    igvBtn.setAttribute('data-link', lcProgramLinks[lcName].iGV);
                    igtaBtn.setAttribute('data-link', lcProgramLinks[lcName].iGTa);
                    igteBtn.setAttribute('data-link', lcProgramLinks[lcName].iGTe);
                } else {
                    // Fallback for any LCs not in the object (should not happen with our complete list)
                    igvBtn.setAttribute('data-link', `https://docs.google.com/spreadsheets/d/fallback-igv-${lcName.replace(/\s+/g,'')}`);
                    igtaBtn.setAttribute('data-link', `https://docs.google.com/spreadsheets/d/fallback-igta-${lcName.replace(/\s+/g,'')}`);
                    igteBtn.setAttribute('data-link', `https://docs.google.com/spreadsheets/d/fallback-igte-${lcName.replace(/\s+/g,'')}`);
                }

                // Add click redirect for each
                [igvBtn, igtaBtn, igteBtn].forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const link = btn.getAttribute('data-link');
                        if (link) window.location.href = link;
                    });
                });

                // Append all three
                igxPanel.appendChild(igvBtn);
                igxPanel.appendChild(igtaBtn);
                igxPanel.appendChild(igteBtn);
            });
        });
    }

    // Initial setup
    setupLcClickHandlers();

    // ---------- REDIRECT HANDLER for other buttons (action, step) ----------
    function handleRedirect(event) {
        const btn = event.currentTarget;
        const link = btn.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        } else {
            console.warn('no data-link found');
        }
    }

    document.querySelectorAll('.action-btn, .step').forEach(btn => {
        btn.addEventListener('click', handleRedirect);
    });

})();