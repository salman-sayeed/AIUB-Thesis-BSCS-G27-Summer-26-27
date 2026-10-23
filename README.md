# AIUB Thesis Group G27

### Domain-Invariant and Explainable Deep Learning for Equitable and Generalizable Skin Lesion Malignancy Classification Across Diverse Skin Tones

**American International University-Bangladesh (AIUB)**  
Department of Computer Science  
Thesis BSCS G27 · Summer 2025–2026

[**Visit the Thesis Website**](https://aiub-thesis-g27-summer25-26.vercel.app/) | [**Research Notebooks**](notebooks/) | [**Reproducibility Guide**](pages/reproducibility.html)

---

## About This Research

Deep learning models can assist in analyzing medical images. However, their predictive behavior may differ when the characteristics of the images used for evaluation differ from those encountered during training.

This study investigates the behavior of deep learning-based skin lesion classification across skin-tone-related domains.

The research focuses on binary classification of skin lesions as **benign or malignant**, using a ResNet50-based classifier.

Rather than assuming that a model performs equally across different groups, the study examines classification performance, cross-domain generalization, predictive uncertainty, probabilistic error, feature-distribution differences, and exploratory visual explanations.

The work is experimental and does not establish clinical reliability or deployment readiness.

---

## Research Objectives

The study investigates the following areas:

1. **Cross-domain generalization:** How does classification performance change when training and evaluation involve different skin-tone-related domains?

2. **Training composition:** How do controlled changes in the proportions of training examples from different domains affect evaluated performance?

3. **Predictive behavior:** What can uncertainty, probabilistic error, and feature-distribution analyses reveal about model behavior?

4. **Domain adaptation:** Does validation-selected, class-conditional Maximum Mean Discrepancy (MMD) regularization change the evaluated results?

5. **Group-level evaluation:** How does model performance vary across the two grouped domains and the six individual Fitzpatrick categories?

6. **Explainability:** What can exploratory Grad-CAM++ visualizations reveal about regions associated with model predictions?

These are research questions and investigation areas, not claims that improved fairness, generalization, or clinical effectiveness has been established.

---

## Skin-Tone Domain Definitions

The study uses the following experimental groupings:

| Domain | Fitzpatrick Categories |
| ------ | ---------------------- |
| Fair   | Types I–III            |
| Dark   | Types IV–VI            |

The term **Fair** refers to the lighter-skin-tone-related grouping used in the experiments. It does not mean that a model has been demonstrated to be fair.

In addition to grouped comparisons, the research examines results across the six Fitzpatrick categories individually.

---

## Explore the Thesis Website

The accompanying website presents the research in a format designed for thesis-poster visitors, students, researchers, and general audiences.

| Section                                       | Description                                                                                |
| --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [Study Overview](pages/overview.html)         | A simplified explanation of the research problem, methodology, evaluation, and limitations |
| [Figures](pages/figures.html)                 | Research figures organized by categories and experimental phases                           |
| [Tables](pages/tables.html)                   | Research results presented in accessible HTML tables                                       |
| [References](pages/references.html)           | Academic references formatted in APA 7th edition                                           |
| [Research Notebooks](pages/notebooks.html)    | Eight downloadable Jupyter notebooks with brief explanations                               |
| [Reproducibility](pages/reproducibility.html) | Experimental environment, resource availability, reproduction guidance, and limitations    |

**Live website:**  
https://aiub-thesis-g27-summer25-26.vercel.app/

The website is built with HTML, CSS, and vanilla JavaScript and is deployed using Vercel.

---

## Research Notebooks

Eight Jupyter notebooks document the main experimental stages.

| Phase | Notebook                                   | Purpose                                                                        |
| ----- | ------------------------------------------ | ------------------------------------------------------------------------------ |
| 01    | `P01_Initial_Analysis.ipynb`               | Dataset exploration and initial characterization                               |
| 02    | `P02_Baseline_ResNet50.ipynb`              | ResNet50 baseline for benign/malignant classification                          |
| 03    | `P03_CrossDomain_Generalization_MMD.ipynb` | Within-domain and cross-domain evaluation, including representation MMD        |
| 04    | `P04_CORRECTED_Controlled_Mixing.ipynb`    | Controlled training-composition experiments                                    |
| 05    | `P05_CORRECTED_Mechanistic_Analysis.ipynb` | Predictive uncertainty, probabilistic error, and feature-distribution analysis |
| 06    | `P06_FROZEN_ClassConditional_MMD.ipynb`    | Validation-selected class-conditional MMD adaptation                           |
| 07    | `P07_FROZEN_Broader_Fairness.ipynb`        | Grouped and individual Fitzpatrick-category evaluation                         |
| 08    | `P08_FROZEN_GradCAM_PlusPlus.ipynb`        | Exploratory Grad-CAM++ visual explanations                                     |

The notebooks are available in the [`notebooks/`](notebooks/) directory.

### About the Public Notebook Copies

The downloadable notebooks preserve the research code and explanatory material.

Saved execution outputs have been removed from the public copies.

The notebooks may still require external dataset files, model checkpoints, intermediate artifacts, dependency setup, and adjustments to environment-specific file paths.

They should be treated as **research-code archives and partial reproduction materials**, not as a verified, one-click reproduction package.

For additional details, see the [notebook documentation](notebooks/README.md).

---

## Dataset

### Fitzpatrick17k

This study uses the Fitzpatrick17k dataset.

**Original repository:**  
https://github.com/mattgroh/fitzpatrick17k

The original repository provides information about the dataset and publicly available annotation resources.

### Clinical Image Access

The research team obtained the image data separately from the dataset's maintainer through an individual research-use arrangement.

Access was granted for scientific and medical research purposes, subject to specific conditions, including deletion of the supplied data after completion of the research.

**The clinical image dataset is not redistributed through this repository.**

Researchers who require the images must obtain their own authorized access from the original dataset maintainers and follow the applicable conditions.

Some image links or other resources referenced by the original dataset annotations may no longer be accessible.

The original dataset repository should be consulted for access and citation guidance.

---

## Experimental Environment

The research experiments were conducted using the following environment:

| Component            | Research Setup              |
| -------------------- | --------------------------- |
| Computing platform   | Google Colab                |
| Subscription tier    | Free                        |
| GPU                  | NVIDIA T4                   |
| Programming language | Python                      |
| Notebook format      | Jupyter Notebook (`.ipynb`) |
| Research storage     | Google Drive                |
| Primary classifier   | ResNet50                    |

The availability of equivalent hardware on Google Colab's free tier is not guaranteed.

The public repository does not provide a fully pinned and independently verified software environment.

Therefore, reproducing exact numerical results may require additional setup and may not be possible from the published materials alone.

---

## Reproducibility

Researchers interested in exploring the code can follow this general process:

1. Download the research notebooks.
2. Prepare a compatible Python/Jupyter environment.
3. Obtain the dataset through authorized channels.
4. Review and configure dataset locations, Google Drive paths, and other file dependencies.
5. Identify required checkpoints and intermediate artifacts.
6. Review the notebooks in their numbered experimental order.
7. Compare any regenerated outputs with the study's published figures and tables.

**Important:** These steps describe a general investigation workflow. They have not been verified as a complete, independently executable reproduction procedure.

Some experiments may require substantial computation or resources beyond a single free Colab session.

For a more accessible explanation, visit the [Research Reproducibility page](pages/reproducibility.html).

---

## Project Structure

```text
AIUB-Thesis-BSCS-G27-Summer-26-27/
│
├── index.html
│
├── pages/
│   ├── overview.html
│   ├── figures.html
│   ├── tables.html
│   ├── references.html
│   ├── notebooks.html
│   └── reproducibility.html
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
├── notebooks/
│   ├── README.md
│   └── P01–P08 research notebooks
│
└── README.md
```

The structure above summarizes the main website and research-code components rather than every individual asset.

---

## Running the Website Locally

The website uses static HTML, CSS, and JavaScript. No frontend build process is required.

Clone the repository:

```bash
git clone https://github.com/salman-sayeed/AIUB-Thesis-BSCS-G27-Summer-26-27.git
```

Enter the project directory:

```bash
cd AIUB-Thesis-BSCS-G27-Summer-26-27
```

Start a local web server:

```bash
python3 -m http.server 8000
```

Then open:

http://localhost:8000/

The local server is for viewing the website. Running the machine-learning experiments requires the separate research resources described above.

---

## Research Team

**Thesis BSCS G27 — Summer 2025–2026**

| Member                 | Student ID |
| ---------------------- | ---------- |
| Salman Sayeed          | 22-49006-3 |
| Kayjer Islam           | 22-49005-3 |
| S.M. Nahid Hassan      | 22-49026-3 |
| MD Arafat Rahman Sifat | 22-49025-3 |

**Department of Computer Science**  
American International University-Bangladesh

---

## Research Scope and Disclaimer

This project was conducted for academic research.

Its findings concern the evaluated models, datasets, experimental configurations, and comparison procedures described in the thesis.

The results should not be interpreted as demonstrating fairness across all skin-tone groups or populations.

Exploratory explainability visualizations do not establish clinical correctness or reliability.

**The models and materials are not intended for clinical diagnosis, medical decision-making, or patient care.**

---

## Acknowledgment of Original Data Sources

The research team acknowledges the creators and maintainers of Fitzpatrick17k for their work and for providing access to research data under the applicable conditions.

Users of the original dataset should consult its maintainers' documentation for appropriate attribution and usage requirements.
