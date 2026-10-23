"use strict";

/* =========================================================
   THESIS GROUP G27 — REFERENCES

   Source: References APA 7.pdf
   Total references: 34

   Vanilla JavaScript
   No external libraries or API requests
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------------------------------------
     1. REFERENCE DATA
     ------------------------------------------------------- */

  const references = [
    {
      citation: `Adebayo, J., Gilmer, J., Muelly, M., Goodfellow, I., Hardt, M., &amp; Kim, B. (2018). Sanity checks for saliency maps. In <em>Advances in Neural Information Processing Systems</em> (Vol. 31, pp. 9505–9515).`,
    },

    {
      citation: `Alipour, N., Burke, T., &amp; Courtney, J. (2024). Skin type diversity in skin lesion datasets: A review. <em>Current Dermatology Reports, 13</em>(3), 198–210.`,
      doi: "https://doi.org/10.1007/s13671-024-00440-0",
    },

    {
      citation: `Arun, N., Gaw, N., Singh, P., Chang, K., Aggarwal, M., Chen, B., Hoebel, K., Gupta, S., Patel, J., Gidwani, M., Adebayo, J., Li, M. D., &amp; Kalpathy-Cramer, J. (2021). Assessing the trustworthiness of saliency maps for localizing abnormalities in medical imaging. <em>Radiology: Artificial Intelligence, 3</em>(6), Article e200267.`,
      doi: "https://doi.org/10.1148/ryai.2021200267",
    },

    {
      citation: `Chamarthi, S., Fogelberg, K., Brinker, T. J., &amp; Niebling, J. (2024). Mitigating the influence of domain shift in skin lesion classification: A benchmark study of unsupervised domain adaptation methods. <em>Informatics in Medicine Unlocked, 44</em>, Article 101430.`,
      doi: "https://doi.org/10.1016/j.imu.2023.101430",
    },

    {
      citation: `Chattopadhyay, A., Sarkar, A., Howlader, P., &amp; Balasubramanian, V. N. (2018). Grad-CAM++: Generalized gradient-based visual explanations for deep convolutional networks. In <em>Proceedings of the IEEE Winter Conference on Applications of Computer Vision (WACV)</em> (pp. 839–847).`,
      doi: "https://doi.org/10.1109/WACV.2018.00097",
    },

    {
      citation: `Collins, G. S., Moons, K. G. M., Dhiman, P., Riley, R. D., Beam, A. L., Van Calster, B., Ghassemi, M., Liu, X., Reitsma, J. B., van Smeden, M., Boulesteix, A.-L., Camaradou, J. C., Celi, L. A., Denaxas, S., Denniston, A. K., Glocker, B., Golub, R. M., Harvey, H., Heinze, G., . . . Logullo, P. (2024). TRIPOD+AI statement: Updated guidance for reporting clinical prediction models that use regression or machine learning methods. <em>BMJ, 385</em>, Article e078378.`,
      doi: "https://doi.org/10.1136/bmj-2023-078378",
    },

    {
      citation: `Corbin, A., &amp; Marques, O. (2023). Assessing bias in skin lesion classifiers with contemporary deep learning and post-hoc explainability techniques. <em>IEEE Access, 11</em>, 78339–78352.`,
      doi: "https://doi.org/10.1109/ACCESS.2023.3289320",
    },

    {
      citation: `Daneshjou, R., Smith, M. P., Sun, M. D., Rotemberg, V., &amp; Zou, J. (2021). Lack of transparency and potential bias in artificial intelligence data sets and algorithms: A scoping review. <em>JAMA Dermatology, 157</em>(11), 1362–1369.`,
      doi: "https://doi.org/10.1001/jamadermatol.2021.3129",
    },

    {
      citation: `Daneshjou, R., Vodrahalli, K., Novoa, R. A., Jenkins, M., Liang, W., Rotemberg, V., Ko, J., Swetter, S. M., Bailey, E. E., Gevaert, O., Mukherjee, P., Phung, M., Yekrang, K., Fong, B., Sahasrabudhe, R., Allerup, J. A. C., Okata-Karigane, U., Zou, J., &amp; Chiou, A. S. (2022). Disparities in dermatology AI performance on a diverse, curated clinical image set. <em>Science Advances, 8</em>, Article eabq6147.`,
      doi: "https://doi.org/10.1126/sciadv.abq6147",
    },

    {
      citation: `Esteva, A., Kuprel, B., Novoa, R. A., Ko, J., Swetter, S. M., Blau, H. M., &amp; Thrun, S. (2017). Dermatologist-level classification of skin cancer with deep neural networks. <em>Nature, 542</em>, 115–118.`,
      doi: "https://doi.org/10.1038/nature21056",
    },

    {
      citation: `Fogelberg, K., Chamarthi, S., Maron, R. C., Niebling, J., &amp; Brinker, T. J. (2023). Domain shifts in dermoscopic skin cancer datasets: Evaluation of essential limitations for clinical translation. <em>New Biotechnology, 76</em>, 106–117.`,
      doi: "https://doi.org/10.1016/j.nbt.2023.04.006",
    },

    {
      citation: `Ghesu, F. C., Georgescu, B., Mansoor, A., Yoo, Y., Gibson, E., Vishwanath, R. S., Balachandran, A., Balter, J. M., Cao, Y., Singh, R., Digumarthy, S. R., Kalra, M. K., Grbic, S., &amp; Comaniciu, D. (2021). Quantifying and leveraging predictive uncertainty for medical image assessment. <em>Medical Image Analysis, 68</em>, Article 101855.`,
      doi: "https://doi.org/10.1016/j.media.2020.101855",
    },

    {
      citation: `Giavina-Bianchi, M., Vitor, W. G., de Paiva, V. F., Okita, A. L., Sousa, R. M., &amp; Machado, B. (2023). Explainability agreement between dermatologists and five visual explanations techniques in deep neural networks for melanoma AI classification. <em>Frontiers in Medicine, 10</em>, Article 1241484.`,
      doi: "https://doi.org/10.3389/fmed.2023.1241484",
    },

    {
      citation: `Gretton, A., Borgwardt, K. M., Rasch, M. J., Schölkopf, B., &amp; Smola, A. (2012). A kernel two-sample test. <em>Journal of Machine Learning Research, 13</em>, 723–773.`,
    },

    {
      citation: `Groh, M., Badri, O., Daneshjou, R., Koochek, A., Harris, C., Soenksen, L. R., Doraiswamy, P. M., &amp; Picard, R. (2024). Deep learning-aided decision support for diagnosis of skin disease across skin tones. <em>Nature Medicine, 30</em>(2), 573–583.`,
      doi: "https://doi.org/10.1038/s41591-023-02728-3",
    },

    {
      citation: `Groh, M., Harris, C., Soenksen, L., Lau, F., Han, R., Kim, A., Koochek, A., &amp; Badri, O. (2021). Evaluating deep neural networks trained on clinical images in dermatology with the Fitzpatrick 17k dataset. In <em>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)</em> (pp. 1820–1828).`,
      doi: "https://doi.org/10.1109/CVPRW53098.2021.00201",
    },

    {
      citation: `Guo, C., Pleiss, G., Sun, Y., &amp; Weinberger, K. Q. (2017). On calibration of modern neural networks. In <em>Proceedings of the 34th International Conference on Machine Learning (ICML)</em> (Vol. 70, pp. 1321–1330).`,
    },

    {
      citation: `Haenssle, H. A., Fink, C., Schneiderbauer, R., Toberer, F., Buhl, T., Blum, A., Kalloo, A., Ben Hadj Hassen, A., Thomas, L., Enk, A., Uhlmann, L., &amp; Reader Study Level-I and Level-II Groups. (2018). Man against machine: Diagnostic performance of a deep learning convolutional neural network for dermoscopic melanoma recognition in comparison to 58 dermatologists. <em>Annals of Oncology, 29</em>(8), 1836–1842.`,
      doi: "https://doi.org/10.1093/annonc/mdy166",
    },

    {
      citation: `Kurz, A., Hauser, K., Mehrtens, H. A., Krieghoff-Henning, E., Hekler, A., Kather, J. N., Fröhling, S., von Kalle, C., &amp; Brinker, T. J. (2022). Uncertainty estimation in medical image classification: Systematic review. <em>JMIR Medical Informatics, 10</em>(8), Article e36427.`,
      doi: "https://doi.org/10.2196/36427",
    },

    {
      citation: `Lakshminarayanan, B., Pritzel, A., &amp; Blundell, C. (2017). Simple and scalable predictive uncertainty estimation using deep ensembles. In <em>Advances in Neural Information Processing Systems</em> (Vol. 30).`,
    },

    {
      citation: `Liu, Y., Jain, A., Eng, C., Way, D. H., Lee, K., Bui, P., Kanada, K., de Oliveira Marinho, G., Gallegos, J., Gabriele, S., Gupta, V., Singh, N., Natarajan, V., Hofmann-Wellenhof, R., Corrado, G. S., Peng, L. H., Webster, D. R., Ai, D., Huang, S. J., . . . Coz, D. (2020). A deep learning system for differential diagnosis of skin diseases. <em>Nature Medicine, 26</em>(6), 900–908.`,
      doi: "https://doi.org/10.1038/s41591-020-0842-3",
    },

    {
      citation: `Liu, Y., Primiero, C. A., Kulkarni, V., Soyer, H. P., &amp; Betz-Stablein, B. (2023). Artificial intelligence for the classification of pigmented skin lesions in populations with skin of color: A systematic review. <em>Dermatology, 239</em>(4), 499–513.`,
      doi: "https://doi.org/10.1159/000530225",
    },

    {
      citation: `Long, M., Cao, Y., Wang, J., &amp; Jordan, M. I. (2015). Learning transferable features with deep adaptation networks. In <em>Proceedings of the 32nd International Conference on Machine Learning</em> (Vol. 37, pp. 97–105).`,
    },

    {
      citation: `Long, M., Cao, Z., Wang, J., &amp; Jordan, M. I. (2018). Conditional adversarial domain adaptation. In <em>Advances in Neural Information Processing Systems</em> (Vol. 31).`,
    },

    {
      citation: `Marchetti, M. A., Cowen, E. A., Kurtansky, N. R., Weber, J., Dauscher, M., DeFazio, J., Deng, L., Dusza, S. W., Haliasos, H., Halpern, A. C., Hosein, S., Nazir, Z. H., Marghoob, A. A., Quigley, E. A., Salvador, T., &amp; Rotemberg, V. M. (2023). Prospective validation of dermoscopy-based open-source artificial intelligence for melanoma diagnosis (PROVE-AI study). <em>npj Digital Medicine, 6</em>(1), Article 127.`,
      doi: "https://doi.org/10.1038/s41746-023-00872-1",
    },

    {
      citation: `Miller, R. J. H., Singh, A., Otaki, Y., Tamarappoo, B. K., Kavanagh, P., Parekh, T., Hu, L.-H., Gransar, H., Sharir, T., Einstein, A. J., Fish, M. B., Ruddy, T. D., Kaufmann, P. A., Sinusas, A. J., Miller, E. J., Bateman, T. M., Dorbala, S., Di Carli, M. F., Liang, J. X., . . . Slomka, P. J. (2023). Mitigating bias in deep learning for diagnosis of coronary artery disease from myocardial perfusion SPECT images. <em>European Journal of Nuclear Medicine and Molecular Imaging, 50</em>(2), 387–397.`,
      doi: "https://doi.org/10.1007/s00259-022-05972-w",
    },

    {
      citation: `Moassefi, M., Rouzrokh, P., Conte, G. M., Vahdati, S., Fu, T., Tahmasebi, A., Younis, M., Farahani, K., Gentili, A., Kline, T., Kitamura, F. C., Huo, Y., Kuanar, S., Younis, K., Erickson, B. J., &amp; Faghani, S. (2023). Reproducibility of deep learning algorithms developed for medical imaging analysis: A systematic review. <em>Journal of Digital Imaging, 36</em>(5), 2306–2312.`,
      doi: "https://doi.org/10.1007/s10278-023-00870-5",
    },

    {
      citation: `Moons, K. G. M., Damen, J. A. A., Kaul, T., Hooft, L., Andaur Navarro, C., Dhiman, P., Beam, A. L., Van Calster, B., Celi, L. A., Denaxas, S., Denniston, A. K., Ghassemi, M., Heinze, G., Kengne, A. P., Maier-Hein, L., Liu, X., Logullo, P., McCradden, M. D., Liu, N., . . . van Smeden, M. (2025). PROBAST+AI: An updated quality, risk of bias, and applicability assessment tool for prediction models using regression or artificial intelligence methods. <em>BMJ, 388</em>, Article e082505.`,
      doi: "https://doi.org/10.1136/bmj-2024-082505",
    },

    {
      citation: `Selvaraju, R. R., Cogswell, M., Das, A., Vedantam, R., Parikh, D., &amp; Batra, D. (2017). Grad-CAM: Visual explanations from deep networks via gradient-based localization. In <em>Proceedings of the IEEE International Conference on Computer Vision (ICCV)</em> (pp. 618–626).`,
    },

    {
      citation: `Sounderajah, V., Guni, A., Liu, X., Collins, G. S., Karthikesalingam, A., Markar, S. R., Golub, R. M., Denniston, A. K., Shetty, S., Moher, D., Bossuyt, P. M., Darzi, A., Ashrafian, H., &amp; STARD-AI Steering Committee. (2025). The STARD-AI reporting guideline for diagnostic accuracy studies using artificial intelligence. <em>Nature Medicine, 31</em>(10), 3283–3289.`,
      doi: "https://doi.org/10.1038/s41591-025-03953-8",
    },

    {
      citation: `Tejani, A. S., Klontzas, M. E., Gatti, A. A., Mongan, J. T., Moy, L., Park, S. H., &amp; Kahn, C. E., Jr. (2024). Checklist for artificial intelligence in medical imaging (CLAIM): 2024 update. <em>Radiology: Artificial Intelligence, 6</em>(4), Article e240300.`,
      doi: "https://doi.org/10.1148/ryai.240300",
    },

    {
      citation: `Tschandl, P., Rinner, C., Apalla, Z., Argenziano, G., Codella, N., Halpern, A., Janda, M., Lallas, A., Longo, C., Malvehy, J., Paoli, J., Puig, S., Rosendahl, C., Soyer, H. P., Zalaudek, I., &amp; Kittler, H. (2020). Human–computer collaboration for skin cancer recognition. <em>Nature Medicine, 26</em>(8), 1229–1234.`,
      doi: "https://doi.org/10.1038/s41591-020-0942-0",
    },

    {
      citation: `Ulrich, P., Zink, A., Biedermann, T., &amp; Sitaru, S. (2025). Beyond Fitzpatrick: Automated artificial intelligence-based skin tone analysis in dermatological patients. <em>npj Digital Medicine, 8</em>, Article 378.`,
      doi: "https://doi.org/10.1038/s41746-025-01770-4",
    },

    {
      citation: `Zhou, K., Liu, Z., Qiao, Y., Xiang, T., &amp; Loy, C. C. (2023). Domain generalization: A survey. <em>IEEE Transactions on Pattern Analysis and Machine Intelligence, 45</em>(4), 4396–4415.`,
      doi: "https://doi.org/10.1109/TPAMI.2022.3195549",
    },
  ];

  /* -------------------------------------------------------
     2. GET PAGE ELEMENTS
     ------------------------------------------------------- */

  const list = document.getElementById("references-list");

  const search = document.getElementById("references-search");

  const count = document.getElementById("references-count");

  const status = document.getElementById("references-status");

  const empty = document.getElementById("references-empty");

  const totalBadge = document.querySelector(".references-total");

  if (!list || !search || !count || !status || !empty) {
    console.error("References page elements are missing.");

    return;
  }

  /* -------------------------------------------------------
     3. CREATE REFERENCE ENTRIES
     ------------------------------------------------------- */

  const fragment = document.createDocumentFragment();

  references.forEach((reference) => {
    const item = document.createElement("li");

    /*
      The citation HTML is hard-coded above.
      Never insert user search input or externally
      fetched content using innerHTML.
    */

    item.innerHTML = reference.citation;

    /* Add clickable DOI where available */

    if (reference.doi) {
      item.appendChild(document.createTextNode(" "));

      const link = document.createElement("a");

      link.href = reference.doi;

      link.textContent = reference.doi;

      link.target = "_blank";

      link.rel = "noopener noreferrer";

      item.appendChild(link);
    }

    fragment.appendChild(item);
  });

  /* Add all entries to the page */

  list.replaceChildren(fragment);

  /* Update total count badge */

  if (totalBadge) {
    totalBadge.textContent = `${references.length} References`;
  }

  /* -------------------------------------------------------
     4. NORMALIZE TEXT FOR SEARCH

     Allows case-insensitive searches and matching
     names with accented characters.
     ------------------------------------------------------- */

  function normalize(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  /* -------------------------------------------------------
     5. PREPARE SEARCH DATA
     ------------------------------------------------------- */

  const items = [...list.querySelectorAll("li")];

  const searchableText = items.map((item) => {
    return normalize(item.textContent);
  });

  /* -------------------------------------------------------
     6. FILTER REFERENCES
     ------------------------------------------------------- */

  function filterReferences() {
    const query = normalize(search.value.trim());

    let visible = 0;

    items.forEach((item, index) => {
      const match = searchableText[index].includes(query);

      item.hidden = !match;

      if (match) {
        visible++;
      }
    });

    /* Show appropriate content */

    list.hidden = visible === 0;

    empty.hidden = visible !== 0;

    /* Update search result count */

    if (query) {
      count.textContent = `Showing ${visible} of ${references.length} references`;
    } else {
      count.textContent = `${references.length} references`;
    }
  }

  /* -------------------------------------------------------
     7. INITIALIZE SEARCH
     ------------------------------------------------------- */

  search.disabled = false;

  status.hidden = true;

  search.addEventListener("input", filterReferences);

  search.addEventListener("search", filterReferences);

  /* Display initial complete list */

  filterReferences();
});
