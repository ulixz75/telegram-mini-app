document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    es: {
      welcome: {
        title: "CaloriFit",
        subtitle: "Tu asistente personal de nutrición",
        description:
          "Calcula tus calorías ideales y alcanza tus objetivos de peso de forma saludable",
        savedData: "Tienes datos guardados",
        viewLast: "Ver mi último cálculo",
        start: "Comenzar",
      },
      language: { title: "Elige tu idioma", subtitle: "Choose your language" },
      units: {
        title: "Sistema de medidas",
        metric: "Métrico",
        metricDesc: "Kilogramos y centímetros",
        imperial: "Imperial",
        imperialDesc: "Libras y pulgadas",
      },
      gender: {
        title: "¿Cuál es tu género?",
        male: "Masculino",
        female: "Femenino",
      },
      age: { title: "¿Cuál es tu edad?", unit: "años", placeholder: "25" },
      weight: {
        title: "¿Cuál es tu peso?",
        unitKg: "kilogramos",
        unitLb: "libras",
        placeholderKg: "70",
        placeholderLb: "154",
      },
      height: {
        title: "¿Cuál es tu altura?",
        unitCm: "centímetros",
        unitIn: "pulgadas",
        placeholderCm: "170",
        placeholderIn: "67",
      },
      activity: {
        title: "Nivel de actividad",
        sedentary: "Sedentario",
        sedentaryDesc: "Poco o ningún ejercicio",
        light: "Ligero",
        lightDesc: "1-3 días/semana",
        moderate: "Moderado",
        moderateDesc: "3-5 días/semana",
        active: "Activo",
        activeDesc: "6-7 días/semana",
        veryActive: "Muy activo",
        veryActiveDesc: "Ejercicio intenso diario",
      },
      goal: {
        title: "Pérdida semanal",
        subtitle: "¿Cuánto quieres perder por semana?",
        veryGradual: "Pérdida muy gradual",
        recommended: "Recomendado - Saludable",
        moderate: "Moderado",
        fast: "Rápido - Con supervisión",
      },
      results: {
        title: "Tu Plan Personalizado",
        subtitle: "Basado en tus datos y objetivos",
        dailyCalories: "Calorías Diarias",
        caloriesPerDay: "calorías/día",
        bmr: "Metabolismo basal",
        tdee: "Gasto total",
        macros: "Macronutrientes",
        protein: "Proteína",
        carbs: "Carbohidratos",
        fat: "Grasas",
        projection: "Proyección",
        month1: "1 mes",
        month2: "2 meses",
        month3: "3 meses",
        tips: "Consejos",
        tip1: "Bebe al menos 2 litros de agua al día",
        tip2: "Come 5-6 veces al día en porciones pequeñas",
        tip3: "Prioriza alimentos integrales y proteína magra",
        tip4: "Duerme 7-8 horas para mejor recuperación",
        tip5: "Ajusta las calorías si no ves progreso en 2 semanas",
        recalculate: "Calcular de nuevo",
      },
      common: { continue: "Continuar" },
    },
    en: {
      welcome: {
        title: "CaloriFit",
        subtitle: "Your personal nutrition assistant",
        description:
          "Calculate your ideal calories and reach your weight goals in a healthy way",
        savedData: "You have saved data",
        viewLast: "View my last calculation",
        start: "Get Started",
      },
      language: { title: "Choose your language", subtitle: "Elige tu idioma" },
      units: {
        title: "Measurement System",
        metric: "Metric",
        metricDesc: "Kilograms and centimeters",
        imperial: "Imperial",
        imperialDesc: "Pounds and inches",
      },
      gender: { title: "What's your gender?", male: "Male", female: "Female" },
      age: { title: "What's your age?", unit: "years", placeholder: "25" },
      weight: {
        title: "What's your weight?",
        unitKg: "kilograms",
        unitLb: "pounds",
        placeholderKg: "154",
        placeholderLb: "154",
      },
      height: {
        title: "What's your height?",
        unitCm: "centimeters",
        unitIn: "inches",
        placeholderCm: "67",
        placeholderIn: "67",
      },
      activity: {
        title: "Activity Level",
        sedentary: "Sedentary",
        sedentaryDesc: "Little or no exercise",
        light: "Light",
        lightDesc: "1-3 days/week",
        moderate: "Moderate",
        moderateDesc: "3-5 days/week",
        active: "Active",
        activeDesc: "6-7 days/week",
        veryActive: "Very Active",
        veryActiveDesc: "Intense daily exercise",
      },
      goal: {
        title: "Weekly Loss",
        subtitle: "How much do you want to lose per week?",
        veryGradual: "Very gradual loss",
        recommended: "Recommended - Healthy",
        moderate: "Moderate",
        fast: "Fast - With supervision",
      },
      results: {
        title: "Your Personalized Plan",
        subtitle: "Based on your data and goals",
        dailyCalories: "Daily Calories",
        caloriesPerDay: "calories/day",
        bmr: "Basal metabolism",
        tdee: "Total expenditure",
        macros: "Macronutrients",
        protein: "Protein",
        carbs: "Carbohydrates",
        fat: "Fats",
        projection: "Projection",
        month1: "1 month",
        month2: "2 months",
        month3: "3 months",
        tips: "Tips",
        tip1: "Drink at least 2 liters of water per day",
        tip2: "Eat 5-6 times a day in small portions",
        tip3: "Prioritize whole foods and lean protein",
        tip4: "Sleep 7-8 hours for better recovery",
        tip5: "Adjust calories if you don't see progress in 2 weeks",
        recalculate: "Calculate again",
      },
      common: { continue: "Continue" },
    },
  };

  let state = {
    step: "welcome",
    language: "es",
    units: "metric",
    userData: {
      gender: "",
      age: "",
      weight: "",
      height: "",
      activity: "",
      goal: "lose",
      weeklyGoal: "0.5",
    },
    results: null,
    savedData: null,
  };

  const screens = {
    welcome: document.getElementById("welcome-screen"),
    language: document.getElementById("language-screen"),
    units: document.getElementById("units-screen"),
    gender: document.getElementById("gender-screen"),
    age: document.getElementById("age-screen"),
    weight: document.getElementById("weight-screen"),
    height: document.getElementById("height-screen"),
    activity: document.getElementById("activity-screen"),
    goal: document.getElementById("goal-screen"),
    results: document.getElementById("results-screen"),
  };

  const setState = (newState) => {
    Object.assign(state, newState);
    render();
  };

  const handleInputChange = (field, value) => {
    state.userData[field] = value;
  };

  const render = () => {
    Object.values(screens).forEach((screen) => (screen.style.display = "none"));
    const currentScreen = screens[state.step];
    currentScreen.style.display = "flex";
    currentScreen.innerHTML = ""; // Clear previous content

    const t = translations[state.language];

    switch (state.step) {
      case "welcome":
        currentScreen.className = "screen from-purple-600";
        currentScreen.innerHTML = `
                    <div class="text-center text-white space-y-6 animate-fade-in">
                        <div class="flex justify-center mb-4">
                            <div class="icon-wrapper"><i data-lucide="zap" class="icon-lg"></i></div>
                        </div>
                        <h1 class="text-5xl font-bold mb-2">${
                          t.welcome.title
                        }</h1>
                        <p class="text-xl opacity-90">${t.welcome.subtitle}</p>
                        <p class="text-lg opacity-80 max-w-md mx-auto">${
                          t.welcome.description
                        }</p>
                        ${
                          state.savedData
                            ? `
                            <div class="bg-white/20 backdrop-blur-lg rounded-2xl p-4 max-w-sm mx-auto">
                                <p class="text-sm mb-2">${t.welcome.savedData}</p>
                                <button id="view-last-btn" class="text-sm underline hover:no-underline">${t.welcome.viewLast}</button>
                            </div>`
                            : ""
                        }
                        <button id="start-btn" class="btn-primary">${
                          t.welcome.start
                        }</button>
                    </div>`;
        currentScreen
          .querySelector("#start-btn")
          ?.addEventListener("click", () => setState({ step: "language" }));
        currentScreen
          .querySelector("#view-last-btn")
          ?.addEventListener("click", () =>
            setState({ results: state.savedData, step: "results" })
          );
        break;

      case "language":
        currentScreen.className = "screen from-cyan-500";
        currentScreen.innerHTML = `
                    <div class="max-w-md w-full space-y-6">
                        <div class="text-center text-white">
                            <i data-lucide="globe" class="icon"></i>
                            <h2 class="text-3xl font-bold">${t.language.title}</h2>
                            <p class="text-lg opacity-90 mt-2">${t.language.subtitle}</p>
                        </div>
                        <div class="space-y-4">
                            <button class="btn-choice" data-lang="es">
                                <span class="flex items-center gap-3"><span class="text-3xl">🇪🇸</span><span class="text-xl font-semibold">Español</span></span><i data-lucide="chevron-right" class="icon-sm"></i>
                            </button>
                            <button class="btn-choice" data-lang="en">
                                <span class="flex items-center gap-3"><span class="text-3xl">🇺🇸</span><span class="text-xl font-semibold">English</span></span><i data-lucide="chevron-right" class="icon-sm"></i>
                            </button>
                        </div>
                    </div>`;
        currentScreen.querySelectorAll("[data-lang]").forEach((btn) => {
          btn.addEventListener("click", () =>
            setState({ language: btn.dataset.lang, step: "units" })
          );
        });
        break;

      case "units":
        currentScreen.className = "screen from-teal-500";
        currentScreen.innerHTML = `
                    <div class="max-w-md w-full space-y-6">
                        <div class="text-center text-white">
                            <i data-lucide="scale" class="icon"></i>
                            <h2 class="text-3xl font-bold">${t.units.title}</h2>
                        </div>
                        <div class="space-y-4">
                            <button class="btn-choice" data-units="metric">
                                <div><div class="text-xl font-semibold mb-1">${t.units.metric}</div><div class="text-sm opacity-80">${t.units.metricDesc}</div></div><span class="text-3xl">📏</span>
                            </button>
                             <button class="btn-choice" data-units="imperial">
                                <div><div class="text-xl font-semibold mb-1">${t.units.imperial}</div><div class="text-sm opacity-80">${t.units.imperialDesc}</div></div><span class="text-3xl">📐</span>
                            </button>
                        </div>
                    </div>`;
        currentScreen.querySelectorAll("[data-units]").forEach((btn) => {
          btn.addEventListener("click", () =>
            setState({ units: btn.dataset.units, step: "gender" })
          );
        });
        break;

      case "gender":
        currentScreen.className = "screen from-blue-500";
        currentScreen.innerHTML = `
                    <div class="max-w-md w-full space-y-6">
                        <h2 class="text-3xl font-bold text-white text-center">${t.gender.title}</h2>
                        <div class="space-y-4">
                            <button class="btn-choice" data-gender="male"><span class="flex items-center gap-3"><span class="text-3xl">👨</span><span class="text-xl font-semibold">${t.gender.male}</span></span><i data-lucide="chevron-right" class="icon-sm"></i></button>
                            <button class="btn-choice" data-gender="female"><span class="flex items-center gap-3"><span class="text-3xl">👩</span><span class="text-xl font-semibold">${t.gender.female}</span></span><i data-lucide="chevron-right" class="icon-sm"></i></button>
                        </div>
                    </div>`;
        currentScreen.querySelectorAll("[data-gender]").forEach((btn) => {
          btn.addEventListener("click", () => {
            handleInputChange("gender", btn.dataset.gender);
            setState({ step: "age" });
          });
        });
        break;

      case "age":
      case "weight":
      case "height":
        renderInputScreen(currentScreen);
        break;

      case "activity":
        currentScreen.className = "screen from-green-500";
        currentScreen.innerHTML = `
                    <div class="max-w-md w-full space-y-6">
                        <div class="text-center text-white">
                            <i data-lucide="activity" class="icon"></i>
                            <h2 class="text-3xl font-bold">${
                              t.activity.title
                            }</h2>
                        </div>
                        <div class="space-y-3">
                            ${[
                              "sedentary",
                              "light",
                              "moderate",
                              "active",
                              "veryActive",
                            ]
                              .map(
                                (level) => `
                                <button class="btn-choice text-left w-full" data-activity="${level}">
                                    <div>
                                        <div class="font-semibold text-lg">${
                                          t.activity[level]
                                        }</div>
                                        <div class="text-sm opacity-80">${
                                          t.activity[level + "Desc"]
                                        }</div>
                                    </div>
                                </button>
                            `
                              )
                              .join("")}
                        </div>
                    </div>`;
        currentScreen.querySelectorAll("[data-activity]").forEach((btn) => {
          btn.addEventListener("click", () => {
            handleInputChange("activity", btn.dataset.activity);
            setState({ step: "goal" });
          });
        });
        break;

      case "goal":
        currentScreen.className = "screen from-orange-500";
        const goalOptions =
          state.units === "metric"
            ? [
                { v: "0.25", l: "0.25 kg" },
                { v: "0.5", l: "0.5 kg" },
                { v: "0.75", l: "0.75 kg" },
                { v: "1", l: "1 kg" },
              ]
            : [
                { v: "0.25", l: "0.5 lbs" },
                { v: "0.5", l: "1 lb" },
                { v: "0.75", l: "1.5 lbs" },
                { v: "1", l: "2 lbs" },
              ];
        const goalDescs = ["veryGradual", "recommended", "moderate", "fast"];

        currentScreen.innerHTML = `
                     <div class="max-w-md w-full space-y-6">
                        <div class="text-center text-white">
                            <i data-lucide="target" class="icon"></i>
                            <h2 class="text-3xl font-bold">${t.goal.title}</h2>
                            <p class="mt-2 opacity-90">${t.goal.subtitle}</p>
                        </div>
                        <div class="space-y-3">
                            ${goalOptions
                              .map(
                                (opt, i) => `
                                <button class="btn-choice w-full" data-goal="${
                                  opt.v
                                }">
                                    <div>
                                        <div class="font-semibold text-lg">${
                                          opt.l
                                        }</div>
                                        <div class="text-sm opacity-80">${
                                          t.goal[goalDescs[i]]
                                        }</div>
                                    </div>
                                    ${
                                      opt.v === "0.5"
                                        ? '<i data-lucide="award" class="icon-sm text-yellow-300"></i>'
                                        : ""
                                    }
                                </button>
                            `
                              )
                              .join("")}
                        </div>
                    </div>`;
        currentScreen.querySelectorAll("[data-goal]").forEach((btn) => {
          btn.addEventListener("click", () => {
            handleInputChange("weeklyGoal", btn.dataset.goal);
            calculateCalories();
          });
        });
        break;

      case "results":
        renderResultsScreen(currentScreen);
        break;
    }
    lucide.createIcons();
  };

  const renderInputScreen = (screen) => {
    const t = translations[state.language];
    let title, field, placeholder, unit, nextStep, icon;

    switch (state.step) {
      case "age":
        title = t.age.title;
        field = "age";
        placeholder = t.age.placeholder;
        unit = t.age.unit;
        nextStep = "weight";
        icon = "cake-slice";
        break;
      case "weight":
        title = t.weight.title;
        field = "weight";
        unit = state.units === "imperial" ? t.weight.unitLb : t.weight.unitKg;
        placeholder =
          state.units === "imperial"
            ? t.weight.placeholderLb
            : t.weight.placeholderKg;
        nextStep = "height";
        icon = "weight";
        break;
      case "height":
        title = t.height.title;
        field = "height";
        unit = state.units === "imperial" ? t.height.unitIn : t.height.unitCm;
        placeholder =
          state.units === "imperial"
            ? t.height.placeholderIn
            : t.height.placeholderCm;
        nextStep = "activity";
        icon = "ruler";
        break;
    }

    screen.className = "screen from-indigo-500";
    screen.innerHTML = `
            <div class="max-w-md w-full space-y-6">
                <div class="text-center text-white">
                    <i data-lucide="${icon}" class="icon"></i>
                    <h2 class="text-3xl font-bold">${title}</h2>
                </div>
                <div class="bg-white/20 backdrop-blur-lg rounded-2xl p-6">
                    <input id="input-field" type="number" value="${
                      state.userData[field]
                    }" placeholder="${placeholder}" class="number-input">
                    <p class="text-white text-center mt-2 opacity-80">${unit}</p>
                </div>
                <button id="continue-btn" class="btn-continue" ${
                  !state.userData[field] ? "disabled" : ""
                }>
                    ${t.common.continue}
                </button>
            </div>`;

    const input = screen.querySelector("#input-field");
    const continueBtn = screen.querySelector("#continue-btn");

    input.focus();
    input.addEventListener("input", (e) => {
      handleInputChange(field, e.target.value);
      continueBtn.disabled = !e.target.value;
    });

    continueBtn.addEventListener("click", () => {
      if (state.userData[field]) setState({ step: nextStep });
    });
  };

  const renderResultsScreen = (screen) => {
    const t = translations[state.language];
    const { targetCalories, bmr, tdee, macros, weeklyLoss } = state.results;
    const displayWeight =
      state.units === "imperial"
        ? (weeklyLoss * 2.20462).toFixed(1)
        : weeklyLoss;
    const weightUnit = state.units === "imperial" ? "lbs" : "kg";

    screen.className = "screen from-purple-600 pb-20";
    screen.innerHTML = `
            <div class="max-w-2xl mx-auto space-y-4 w-full">
                <div class="text-center text-white py-6"><h2 class="text-3xl font-bold mb-2">${
                  t.results.title
                }</h2><p class="opacity-90">${t.results.subtitle}</p></div>
                <div class="card"><div class="flex items-center gap-3 mb-4"><i data-lucide="zap" class="w-8 h-8"></i><h3 class="text-2xl font-bold">${
                  t.results.dailyCalories
                }</h3></div><div class="text-center"><div class="text-6xl font-bold mb-2">${targetCalories}</div><div class="text-xl opacity-90">${
      t.results.caloriesPerDay
    }</div></div><div class="mt-4 grid grid-cols-2 gap-4"><div class="bg-white/20 rounded-xl p-3 text-center"><div class="text-sm opacity-80">${
      t.results.bmr
    }</div><div class="text-2xl font-bold">${bmr}</div></div><div class="bg-white/20 rounded-xl p-3 text-center"><div class="text-sm opacity-80">${
      t.results.tdee
    }</div><div class="text-2xl font-bold">${tdee}</div></div></div></div>
                <div class="card"><div class="flex items-center gap-3 mb-4"><i data-lucide="apple" class="w-8 h-8"></i><h3 class="text-2xl font-bold">${
                  t.results.macros
                }</h3></div><div class="space-y-3"><div class="flex items-center justify-between"><span class="text-lg">🥩 ${
      t.results.protein
    }</span><span class="text-2xl font-bold">${
      macros.protein
    }g</span></div><div class="progress-bar"><div class="bg-blue-400" style="width: 30%"></div></div><div class="flex items-center justify-between"><span class="text-lg">🍞 ${
      t.results.carbs
    }</span><span class="text-2xl font-bold">${
      macros.carbs
    }g</span></div><div class="progress-bar"><div class="bg-green-400" style="width: 40%"></div></div><div class="flex items-center justify-between"><span class="text-lg">🥑 ${
      t.results.fat
    }</span><span class="text-2xl font-bold">${
      macros.fat
    }g</span></div><div class="progress-bar"><div class="bg-yellow-400" style="width: 30%"></div></div></div></div>
                <div class="card"><div class="flex items-center gap-3 mb-4"><i data-lucide="trending-down" class="w-8 h-8"></i><h3 class="text-2xl font-bold">${
                  t.results.projection
                }</h3></div><div class="grid grid-cols-3 gap-4"><div class="text-center"><div class="text-sm opacity-80">${
      t.results.month1
    }</div><div class="text-2xl font-bold">- ${(displayWeight * 4).toFixed(
      1
    )}${weightUnit}</div></div><div class="text-center"><div class="text-sm opacity-80">${
      t.results.month2
    }</div><div class="text-2xl font-bold">- ${(displayWeight * 8).toFixed(
      1
    )}${weightUnit}</div></div><div class="text-center"><div class="text-sm opacity-80">${
      t.results.month3
    }</div><div class="text-2xl font-bold">- ${(displayWeight * 12).toFixed(
      1
    )}${weightUnit}</div></div></div></div>
                <div class="card"><div class="flex items-center gap-3 mb-4"><i data-lucide="info" class="w-8 h-8"></i><h3 class="text-2xl font-bold">${
                  t.results.tips
                }</h3></div><ul class="space-y-2 text-sm"><li>✅ ${
      t.results.tip1
    }</li><li>✅ ${t.results.tip2}</li><li>✅ ${t.results.tip3}</li><li>✅ ${
      t.results.tip4
    }</li><li>✅ ${t.results.tip5}</li></ul></div>
                <button id="recalculate-btn" class="btn-continue w-full">${
                  t.results.recalculate
                }</button>
            </div>`;
    const recalcBtn = currentScreen.querySelector("#recalculate-btn");
    if (recalcBtn) {
      recalcBtn.addEventListener("click", () => {
        setState({
          step: "welcome",
          userData: {
            gender: "",
            age: "",
            weight: "",
            height: "",
            activity: "",
            goal: "lose",
            weeklyGoal: "0.5",
          },
        });
      });
    }
  };

  const convertToMetric = () => {
    const weight = parseFloat(state.userData.weight);
    const height = parseFloat(state.userData.height);
    if (state.units === "imperial") {
      return { weight: weight * 0.453592, height: height * 2.54 };
    }
    return { weight, height };
  };

  const calculateCalories = () => {
    const { age, gender, activity, weeklyGoal } = state.userData;
    const { weight, height } = convertToMetric();

    let bmr =
      10 * weight +
      6.25 * height -
      5 * parseInt(age) +
      (gender === "male" ? 5 : -161);

    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };
    const tdee = bmr * activityFactors[activity];

    const weeklyDeficit = { 0.25: 275, 0.5: 550, 0.75: 825, 1: 1100 };
    const targetCalories = Math.round(tdee - weeklyDeficit[weeklyGoal]);
    const minCalories = gender === "male" ? 1500 : 1200;
    const finalCalories = Math.max(targetCalories, minCalories);

    const resultData = {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      targetCalories: finalCalories,
      weeklyLoss: weeklyGoal,
      macros: {
        protein: Math.round((finalCalories * 0.3) / 4),
        carbs: Math.round((finalCalories * 0.4) / 4),
        fat: Math.round((finalCalories * 0.3) / 9),
      },
      userData: state.userData,
    };

    // Persist results
    saveData(resultData);

    // Show rewarded interstitial ad before displaying final results.
    // If `show_10118392` is provided by your ad SDK, it should return a Promise
    // that resolves when the ad/watch is complete. Place the user's reward
    // logic inside the `.then()` (the SDK example you shared shows an alert).
    // If the function is not available or it rejects, we fallback to showing
    // the results immediately so the UX is not blocked.
    const showAdAndThen = () => {
      setState({ results: resultData, step: "results" });
    };

    if (typeof show_10118392 === "function") {
      try {
        // Call the ad and wait for it to finish before showing results
        show_10118392()
          .then(() => {
            // Optional: here you can execute the reward callback the SDK expects
            // e.g. grant in-app currency, show a confirmation, etc.
            alert("You have seen an ad!");
            showAdAndThen();
          })
          .catch((err) => {
            console.error("Ad failed or was closed before completion:", err);
            // Fallback: show results anyway
            showAdAndThen();
          });
      } catch (err) {
        console.error("Error while trying to show ad:", err);
        showAdAndThen();
      }
    } else {
      // No ad function available — just show results
      showAdAndThen();
    }
  };

  const saveData = (data) => {
    const dataToSave = {
      ...data,
      language: state.language,
      units: state.units,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem("calorie-data", JSON.stringify(dataToSave));
  };

  const loadSavedData = () => {
    const data = localStorage.getItem("calorie-data");
    if (data) {
      const parsedData = JSON.parse(data);
      state.savedData = parsedData;
      if (parsedData.language) state.language = parsedData.language;
      if (parsedData.units) state.units = parsedData.units;
    }
  };

  // Delegated click handler for buttons that may be re-rendered (works across re-renders)
  // This ensures the "Calcular de nuevo" button always responds even if the
  // results screen is re-created dynamically.
  const appContainer = document.getElementById("app");
  if (appContainer) {
    appContainer.addEventListener("click", (e) => {
      const btn = e.target.closest && e.target.closest("#recalculate-btn");
      if (btn) {
        setState({
          step: "welcome",
          userData: {
            gender: "",
            age: "",
            weight: "",
            height: "",
            activity: "",
            goal: "lose",
            weeklyGoal: "0.5",
          },
        });
      }
    });
  }

  loadSavedData();
  render();
});
