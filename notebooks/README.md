# Thesis Group G27 — Public Research Notebooks

These eight notebooks accompany the study **Domain-Invariant and Explainable Deep Learning for Equitable and Generalizable Skin Lesion Malignancy Classification Across Diverse Skin Tones** (AIUB Thesis Group G27, Summer 2025–2026).

They are copies of the supplied research notebooks. Their original code and explanatory text are preserved, but saved execution outputs (including visualizations and log text) have been removed for a smaller, cleaner public release. The original research notebooks were not modified.

| Notebook | Purpose |
| --- | --- |
| `P01_Initial_Analysis.ipynb` | Initial exploration of dataset and group characteristics. |
| `P02_Baseline_ResNet50.ipynb` | Binary benign/malignant ResNet50 baseline classification. |
| `P03_CrossDomain_Generalization_MMD.ipynb` | Within- and cross-domain tests and representation MMD analysis. |
| `P04_CORRECTED_Controlled_Mixing.ipynb` | Corrected controlled Fair/Dark training-composition experiments and statistical comparisons. |
| `P05_CORRECTED_Mechanistic_Analysis.ipynb` | Uncertainty, calibration-related error, and learned-representation investigations. |
| `P06_FROZEN_ClassConditional_MMD.ipynb` | Class-conditional MMD adaptation, validation-selected settings, and comparisons. |
| `P07_FROZEN_Broader_Fairness.ipynb` | Fair/Dark grouped and individual Fitzpatrick-category analyses. |
| `P08_FROZEN_GradCAM_PlusPlus.ipynb` | Exploratory Grad-CAM++ and visual attention auditing. |

## Dataset access and permissions

- The original [Fitzpatrick17k project](https://github.com/mattgroh/fitzpatrick17k) provides a public annotation CSV and instructions for requesting access to image files from the dataset maintainers.
- The thesis researchers obtained the image files under an individual scientific/medical research access arrangement that required deletion after the research. **No image dataset, private delivery URL, or image archive is redistributed with these notebooks.**
- Researchers wishing to rerun image-based experiments must arrange their **own authorized dataset access** and follow the dataset owner's terms. Some URLs listed in the original annotation CSV may be unavailable.

## Execution notes

- The notebooks were developed using Google Colab; the research team identified an NVIDIA T4 GPU in their free-tier runtime. The availability of equivalent Colab hardware is not guaranteed.
- Code references the research team's Google Drive directory layout, input manifests, saved model checkpoints, and intermediate analysis artifacts. Those paths must be reviewed and adjusted for another environment. Not all dependencies or intermediate files are supplied here.
- The notebooks should therefore be treated as **research-code archives and partial reproduction materials**, not as a verified, one-click or bit-for-bit reproducible package.
- Some experiments are computationally intensive and may require more than a single free Colab session.
- In this study, “Fair” denotes the Fitzpatrick I–III group and “Dark” denotes Fitzpatrick IV–VI; these are domain labels, not statements that a model is fair.
- No clinical validation or deployment-readiness is claimed.

The public site contains the study's [figures and tables](https://aiub-thesis-g27-summer25-26.vercel.app/).
