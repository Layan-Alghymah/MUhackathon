import type {
  SiteConfig,
  NavLink,
  FeatureFlags,
  ContactInfo,
} from "./types";

/**
 * الإعدادات المركزية لموقع «هاكثون الجامعة الذكية».
 * كل قيمة غير معلنة رسميًا تبقى null لتُخفى من الواجهة (لا بيانات مُخترعة).
 */
export const siteConfig: SiteConfig = {
  name: "هاكثون الجامعة الذكية",
  tagline: "من التحدي إلى حلٍّ رقمي قابل للتنفيذ.",
  description:
    "منصة عملية تجمع بين المعرفة والتطبيق، وتحوّل التحديات المؤسسية في جامعة المجمعة إلى حلول رقمية مبتكرة قابلة للتنفيذ.",
  organizer: "جامعة المجمعة",
  organizerShort: "جامعة المجمعة",

  // ⚠️ السنة غير معتمدة رسميًا بعد. عيّنها (مثال: 2025) لتفعيل العدّاد التنازلي.
  //    عند بقائها null: يُعطَّل العدّاد وتُعرض التواريخ نصيًا فقط.
  year: null,

  registrationOpen: { label: "٢٦ يوليو", month: 7, day: 26 },
  registrationClose: { label: "٥ أغسطس", month: 8, day: 5 },

  // رابط التسجيل الرسمي غير متوفر بعد → الزر يظهر Disabled.
  registrationUrl: null,
  // الدليل الإرشادي غير متوفر بعد → الزر يظهر Disabled.
  guideUrl: null,

  // حالة التسجيل العامة. القيمة الحالية "upcoming" لعدم توفّر رابط تسجيل أو سنة معتمدة.
  // غيّرها إلى "open" عند فتح التسجيل، أو "closed" عند انتهائه.
  registrationStatus: "upcoming",
};

/** أعلام التفعيل — لا يُعرض أي قسم مرتبط بها حتى تتوفر بياناته رسميًا. */
export const featureFlags: FeatureFlags = {
  showAwards: false,
  showPartners: false,
  showEvaluationCriteria: false,
  showChallengePages: false,
  showLocation: false,
  showNews: false,
};

/** روابط التنقل داخل الصفحة الرئيسية (RTL). */
export const navLinks: NavLink[] = [
  { id: "about", label: "عن الهاكثون" },
  { id: "objectives", label: "الأهداف" },
  { id: "tracks", label: "المسارات" },
  { id: "timeline", label: "البرنامج الزمني" },
  { id: "workshops", label: "الورش" },
  { id: "faq", label: "الأسئلة الشائعة" },
];

/** بيانات التواصل — كلها null حاليًا فلا تظهر عناصرها في الواجهة. */
export const contact: ContactInfo = {
  email: null,
  phone: null,
  inquiriesGroupUrl: null,
  social: [],
};

/** التقنيات المحورية للهاكثون (وسوم في النبذة). */
export const focusTechnologies: string[] = [
  "الذكاء الاصطناعي",
  "تحليل البيانات",
  "إنترنت الأشياء",
  "التحول الرقمي",
];

/** الفئة المستهدفة (ثلاث فئات فقط). */
export const targetAudience: string[] = [
  "أعضاء هيئة التدريس",
  "الموظفون",
  "الطلاب",
];
