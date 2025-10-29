import React, { useState, useEffect } from 'react';
import { Scale, Zap, Target, TrendingDown, Activity, Apple, Award, ChevronRight, Info, Globe } from 'lucide-react';

const translations = {
  es: {
    welcome: {
      title: "CaloriFit",
      subtitle: "Tu asistente personal de nutrición",
      description: "Calcula tus calorías ideales y alcanza tus objetivos de peso de forma saludable",
      savedData: "Tienes datos guardados",
      viewLast: "Ver mi último cálculo",
      start: "Comenzar"
    },
    language: {
      title: "Elige tu idioma",
      subtitle: "Choose your language"
    },
    units: {
      title: "Sistema de medidas",
      metric: "Métrico",
      metricDesc: "Kilogramos y centímetros",
      imperial: "Imperial",
      imperialDesc: "Libras y pulgadas"
    },
    gender: {
      title: "¿Cuál es tu género?",
      male: "Masculino",
      female: "Femenino"
    },
    age: {
      title: "¿Cuál es tu edad?",
      unit: "años",
      placeholder: "25"
    },
    weight: {
      title: "¿Cuál es tu peso?",
      unitKg: "kilogramos",
      unitLb: "libras",
      placeholderKg: "70",
      placeholderLb: "154"
    },
    height: {
      title: "¿Cuál es tu altura?",
      unitCm: "centímetros",
      unitIn: "pulgadas",
      placeholderCm: "170",
      placeholderIn: "67"
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
      veryActiveDesc: "Ejercicio intenso diario"
    },
    goal: {
      title: "Pérdida semanal",
      subtitle: "¿Cuánto quieres perder por semana?",
      veryGradual: "Pérdida muy gradual",
      recommended: "Recomendado - Saludable",
      moderate: "Moderado",
      fast: "Rápido - Con supervisión"
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
      recalculate: "Calcular de nuevo"
    },
    common: {
      continue: "Continuar"
    }
  },
  en: {
    welcome: {
      title: "CaloriFit",
      subtitle: "Your personal nutrition assistant",
      description: "Calculate your ideal calories and reach your weight goals in a healthy way",
      savedData: "You have saved data",
      viewLast: "View my last calculation",
      start: "Get Started"
    },
    language: {
      title: "Choose your language",
      subtitle: "Elige tu idioma"
    },
    units: {
      title: "Measurement System",
      metric: "Metric",
      metricDesc: "Kilograms and centimeters",
      imperial: "Imperial",
      imperialDesc: "Pounds and inches"
    },
    gender: {
      title: "What's your gender?",
      male: "Male",
      female: "Female"
    },
    age: {
      title: "What's your age?",
      unit: "years",
      placeholder: "25"
    },
    weight: {
      title: "What's your weight?",
      unitKg: "kilograms",
      unitLb: "pounds",
      placeholderKg: "154",
      placeholderLb: "154"
    },
    height: {
      title: "What's your height?",
      unitCm: "centimeters",
      unitIn: "inches",
      placeholderCm: "67",
      placeholderIn: "67"
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
      veryActiveDesc: "Intense daily exercise"
    },
    goal: {
      title: "Weekly Loss",
      subtitle: "How much do you want to lose per week?",
      veryGradual: "Very gradual loss",
      recommended: "Recommended - Healthy",
      moderate: "Moderate",
      fast: "Fast - With supervision"
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
      recalculate: "Calculate again"
    },
    common: {
      continue: "Continue"
    }
  }
};

export default function CalorieFitApp() {
  const [step, setStep] = useState('welcome');
  const [language, setLanguage] = useState('es');
  const [units, setUnits] = useState('metric');
  const [userData, setUserData] = useState({
    gender: '',
    age: '',
    weight: '',
    height: '',
    activity: '',
    goal: 'lose',
    weeklyGoal: '0.5'
  });
  const [results, setResults] = useState(null);
  const [savedData, setSavedData] = useState(null);

  const t = translations[language];

  useEffect(() => {
    loadSavedData();
  }, []);

  const loadSavedData = async () => {
    try {
      const result = await window.storage.get('calorie-data');
      if (result) {
        const data = JSON.parse(result.value);
        setSavedData(data);
        if (data.language) setLanguage(data.language);
        if (data.units) setUnits(data.units);
      }
    } catch (error) {
      console.log('No saved data');
    }
  };

  const saveData = async (data) => {
    try {
      await window.storage.set('calorie-data', JSON.stringify({
        ...data,
        language,
        units,
        lastUpdated: new Date().toISOString()
      }));
    } catch (error) {
      console.error('Save error:', error);
    }
  };

  const convertToMetric = () => {
    const weight = parseFloat(userData.weight);
    const height = parseFloat(userData.height);
    
    if (units === 'imperial') {
      return {
        weight: weight * 0.453592, // lb to kg
        height: height * 2.54 // in to cm
      };
    }
    return { weight, height };
  };

  const calculateCalories = () => {
    const age = parseInt(userData.age);
    const { weight, height } = convertToMetric();

    // Mifflin-St Jeor Formula
    let bmr;
    if (userData.gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    const tdee = bmr * activityFactors[userData.activity];
    
    const weeklyDeficit = {
      '0.25': 275,
      '0.5': 550,
      '0.75': 825,
      '1': 1100
    };

    const targetCalories = Math.round(tdee - weeklyDeficit[userData.weeklyGoal]);
    const minCalories = userData.gender === 'male' ? 1500 : 1200;
    const finalCalories = Math.max(targetCalories, minCalories);

    const macros = {
      protein: Math.round(weight * 2.2 * 0.3),
      carbs: Math.round(finalCalories * 0.4 / 4),
      fat: Math.round(finalCalories * 0.3 / 9)
    };

    const resultData = {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      targetCalories: finalCalories,
      weeklyLoss: userData.weeklyGoal,
      macros,
      userData
    };

    setResults(resultData);
    saveData(resultData);
    setStep('results');
  };

  const handleInputChange = (field, value) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      <div className="text-center text-white space-y-6 animate-fade-in">
        <div className="flex justify-center mb-4">
          <div className="bg-white/20 backdrop-blur-lg rounded-full p-6 shadow-2xl">
            <Zap className="w-16 h-16" />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-2">{t.welcome.title}</h1>
        <p className="text-xl opacity-90">{t.welcome.subtitle}</p>
        <p className="text-lg opacity-80 max-w-md mx-auto">
          {t.welcome.description}
        </p>
        
        {savedData && (
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 max-w-sm mx-auto">
            <p className="text-sm mb-2">{t.welcome.savedData}</p>
            <button
              onClick={() => {
                setResults(savedData);
                setStep('results');
              }}
              className="text-sm underline hover:no-underline"
            >
              {t.welcome.viewLast}
            </button>
          </div>
        )}

        <button
          onClick={() => setStep('language')}
          className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
        >
          {t.welcome.start}
        </button>
      </div>
    </div>
  );

  const LanguageScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600 p-4 flex items-center justify-center">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center text-white">
          <Globe className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">{t.language.title}</h2>
          <p className="text-lg opacity-90 mt-2">{t.language.subtitle}</p>
        </div>
        <div className="space-y-4">
          {[
            { value: 'es', label: 'Español', flag: '🇪🇸' },
            { value: 'en', label: 'English', flag: '🇺🇸' }
          ].map(option => (
            <button
              key={option.value}
              onClick={() => {
                setLanguage(option.value);
                setStep('units');
              }}
              className="w-full bg-white/20 backdrop-blur-lg text-white p-6 rounded-2xl hover:bg-white/30 transition-all transform hover:scale-105 flex items-center justify-between"
            >
              <span className="flex items-center gap-3">
                <span className="text-3xl">{option.flag}</span>
                <span className="text-xl font-semibold">{option.label}</span>
              </span>
              <ChevronRight className="w-6 h-6" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const UnitsScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-green-600 p-4 flex items-center justify-center">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center text-white">
          <Scale className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">{t.units.title}</h2>
        </div>
        <div className="space-y-4">
          {[
            { value: 'metric', label: t.units.metric, desc: t.units.metricDesc, emoji: '📏' },
            { value: 'imperial', label: t.units.imperial, desc: t.units.imperialDesc, emoji: '📐' }
          ].map(option => (
            <button
              key={option.value}
              onClick={() => {
                setUnits(option.value);
                setStep('gender');
              }}
              className="w-full bg-white/20 backdrop-blur-lg text-white p-6 rounded-2xl hover:bg-white/30 transition-all transform hover:scale-105 text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-semibold mb-1">{option.label}</div>
                  <div className="text-sm opacity-80">{option.desc}</div>
                </div>
                <span className="text-3xl">{option.emoji}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const GenderScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 flex items-center justify-center">
      <div className="max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">{t.gender.title}</h2>
        <div className="space-y-4">
          {[
            { value: 'male', label: t.gender.male, emoji: '👨' },
            { value: 'female', label: t.gender.female, emoji: '👩' }
          ].map(option => (
            <button
              key={option.value}
              onClick={() => {
                handleInputChange('gender', option.value);
                setStep('age');
              }}
              className="w-full bg-white/20 backdrop-blur-lg text-white p-6 rounded-2xl hover:bg-white/30 transition-all transform hover:scale-105 flex items-center justify-between"
            >
              <span className="flex items-center gap-3">
                <span className="text-3xl">{option.emoji}</span>
                <span className="text-xl font-semibold">{option.label}</span>
              </span>
              <ChevronRight className="w-6 h-6" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const InputScreen = ({ title, field, placeholder, unit, nextStep, icon: Icon }) => {
    const inputRef = React.useRef(null);
    
    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-4 flex items-center justify-center">
        <div className="max-w-md w-full space-y-6">
          <div className="text-center text-white">
            <Icon className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6">
            <input
              ref={inputRef}
              type="number"
              value={userData[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
              placeholder={placeholder}
              className="w-full bg-white/30 text-white placeholder-white/60 px-4 py-4 rounded-xl text-2xl text-center font-bold focus:outline-none focus:ring-2 focus:ring-white"
            />
            <p className="text-white text-center mt-2 opacity-80">{unit}</p>
          </div>
          <button
            onClick={() => userData[field] && setStep(nextStep)}
            disabled={!userData[field]}
            className="w-full bg-white text-purple-600 px-6 py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transform hover:scale-105 transition-all"
          >
            {t.common.continue}
          </button>
        </div>
      </div>
    );
  };

  const ActivityScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-600 p-4 flex items-center justify-center">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center text-white">
          <Activity className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">{t.activity.title}</h2>
        </div>
        <div className="space-y-3">
          {[
            { value: 'sedentary', label: t.activity.sedentary, desc: t.activity.sedentaryDesc },
            { value: 'light', label: t.activity.light, desc: t.activity.lightDesc },
            { value: 'moderate', label: t.activity.moderate, desc: t.activity.moderateDesc },
            { value: 'active', label: t.activity.active, desc: t.activity.activeDesc },
            { value: 'veryActive', label: t.activity.veryActive, desc: t.activity.veryActiveDesc }
          ].map(option => (
            <button
              key={option.value}
              onClick={() => {
                handleInputChange('activity', option.value);
                setStep('goal');
              }}
              className="w-full bg-white/20 backdrop-blur-lg text-white p-4 rounded-xl hover:bg-white/30 transition-all transform hover:scale-105 text-left"
            >
              <div className="font-semibold text-lg">{option.label}</div>
              <div className="text-sm opacity-80">{option.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const GoalScreen = () => {
    const goalOptions = units === 'metric' 
      ? [
          { value: '0.25', label: '0.25 kg', desc: t.goal.veryGradual },
          { value: '0.5', label: '0.5 kg', desc: t.goal.recommended },
          { value: '0.75', label: '0.75 kg', desc: t.goal.moderate },
          { value: '1', label: '1 kg', desc: t.goal.fast }
        ]
      : [
          { value: '0.25', label: '0.5 lbs', desc: t.goal.veryGradual },
          { value: '0.5', label: '1 lb', desc: t.goal.recommended },
          { value: '0.75', label: '1.5 lbs', desc: t.goal.moderate },
          { value: '1', label: '2 lbs', desc: t.goal.fast }
        ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-500 to-red-600 p-4 flex items-center justify-center">
        <div className="max-w-md w-full space-y-6">
          <div className="text-center text-white">
            <Target className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">{t.goal.title}</h2>
            <p className="mt-2 opacity-90">{t.goal.subtitle}</p>
          </div>
          <div className="space-y-3">
            {goalOptions.map(option => (
              <button
                key={option.value}
                onClick={() => {
                  handleInputChange('weeklyGoal', option.value);
                  calculateCalories();
                }}
                className="w-full bg-white/20 backdrop-blur-lg text-white p-4 rounded-xl hover:bg-white/30 transition-all transform hover:scale-105 text-left flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold text-lg">{option.label}</div>
                  <div className="text-sm opacity-80">{option.desc}</div>
                </div>
                {option.value === '0.5' && (
                  <Award className="w-6 h-6 text-yellow-300" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ResultsScreen = () => {
    const displayWeight = units === 'imperial' 
      ? (results.weeklyLoss * 2.20462).toFixed(1)
      : results.weeklyLoss;
    const weightUnit = units === 'imperial' ? 'lbs' : 'kg';

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4 pb-20">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="text-center text-white py-6">
            <h2 className="text-3xl font-bold mb-2">{t.results.title}</h2>
            <p className="opacity-90">{t.results.subtitle}</p>
          </div>

          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8" />
              <h3 className="text-2xl font-bold">{t.results.dailyCalories}</h3>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">{results.targetCalories}</div>
              <div className="text-xl opacity-90">{t.results.caloriesPerDay}</div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-xl p-3 text-center">
                <div className="text-sm opacity-80">{t.results.bmr}</div>
                <div className="text-2xl font-bold">{results.bmr}</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3 text-center">
                <div className="text-sm opacity-80">{t.results.tdee}</div>
                <div className="text-2xl font-bold">{results.tdee}</div>
              </div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Apple className="w-8 h-8" />
              <h3 className="text-2xl font-bold">{t.results.macros}</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg">🥩 {t.results.protein}</span>
                <span className="text-2xl font-bold">{results.macros.protein}g</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full">
                <div className="bg-blue-400 h-2 rounded-full" style={{width: '30%'}}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-lg">🍞 {t.results.carbs}</span>
                <span className="text-2xl font-bold">{results.macros.carbs}g</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full">
                <div className="bg-green-400 h-2 rounded-full" style={{width: '40%'}}></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-lg">🥑 {t.results.fat}</span>
                <span className="text-2xl font-bold">{results.macros.fat}g</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full">
                <div className="bg-yellow-400 h-2 rounded-full" style={{width: '30%'}}></div>
              </div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="w-8 h-8" />
              <h3 className="text-2xl font-bold">{t.results.projection}</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-sm opacity-80">{t.results.month1}</div>
                <div className="text-2xl font-bold">-{(displayWeight * 4).toFixed(1)}{weightUnit}</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-80">{t.results.month2}</div>
                <div className="text-2xl font-bold">-{(displayWeight * 8).toFixed(1)}{weightUnit}</div>
              </div>
              <div className="text-center">
                <div className="text-sm opacity-80">{t.results.month3}</div>
                <div className="text-2xl font-bold">-{(displayWeight * 12).toFixed(1)}{weightUnit}</div>
              </div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-8 h-8" />
              <h3 className="text-2xl font-bold">{t.results.tips}</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>✅ {t.results.tip1}</li>
              <li>✅ {t.results.tip2}</li>
              <li>✅ {t.results.tip3}</li>
              <li>✅ {t.results.tip4}</li>
              <li>✅ {t.results.tip5}</li>
            </ul>
          </div>

          <button
            onClick={() => {
              setStep('welcome');
              setUserData({
                gender: '', age: '', weight: '', height: '', activity: '', goal: 'lose', weeklyGoal: '0.5'
              });
            }}
            className="w-full bg-white text-purple-600 px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            {t.results.recalculate}
          </button>
        </div>
      </div>
    );
  };

  const weightUnit = units === 'imperial' ? t.weight.unitLb : t.weight.unitKg;
  const weightPlaceholder = units === 'imperial' ? t.weight.placeholderLb : t.weight.placeholderKg;
  const heightUnit = units === 'imperial' ? t.height.unitIn : t.height.unitCm;
  const heightPlaceholder = units === 'imperial' ? t.height.placeholderIn : t.height.placeholderCm;

  return (
    <div className="font-sans">
      {step === 'welcome' && <WelcomeScreen />}
      {step === 'language' && <LanguageScreen />}
      {step === 'units' && <UnitsScreen />}
      {step === 'gender' && <GenderScreen />}
      {step === 'age' && <InputScreen title={t.age.title} field="age" placeholder={t.age.placeholder} unit={t.age.unit} nextStep="weight" icon={Scale} />}
      {step === 'weight' && <InputScreen title={t.weight.title} field="weight" placeholder={weightPlaceholder} unit={weightUnit} nextStep="height" icon={Scale} />}
      {step === 'height' && <InputScreen title={t.height.title} field="height" placeholder={heightPlaceholder} unit={heightUnit} nextStep="activity" icon={Scale} />}
      {step === 'activity' && <ActivityScreen />}
      {step === 'goal' && <GoalScreen />}
      {step === 'results' && <ResultsScreen />}
    </div>
  );
}