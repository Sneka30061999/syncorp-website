// All UI strings keyed by language code.
// Add a new language by adding a new key here — no other file needs to change.

export const LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ta", label: "தமிழ்",  dir: "ltr" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
  { code: "ar", label: "عربي",   dir: "rtl" },
];

export const translations = {
  // ── English ──────────────────────────────────────────────────────────────
  en: {
    // Nav
    nav_home:      "Home",
    nav_about:     "About",
    nav_products:  "Products",
    nav_solutions: "Solutions",
    nav_contact:   "Contact",

    // Hero
    hero_eyebrow: "Innovate · Build · Grow",
    hero_tagline: "Smart SaaS Solutions for Growing Businesses",
    hero_intro:
      "Syncorb Technologies builds innovative software solutions that help businesses streamline operations, improve productivity and grow with confidence.",
    hero_explore:  "Explore Products",
    hero_contactUs: "Contact Us",

    // Products section
    products_eyebrow:  "Our Products",
    products_heading:  "Technology We've Built to Solve Real Problems.",
    products_intro:
      "From AI/ML and FinTech to logistics, education, enterprise SaaS, and commerce — Syncorb builds digital products and platforms around the way businesses actually work.",
    products_learnMore: "Learn More",

    // Solutions section
    solutions_eyebrow:  "Our Solutions",
    solutions_heading:  "Built for Your Business Goals",
    solutions_body:
      "Our SaaS solutions are designed to help you work smarter, not harder. We focus on delivering practical, scalable and easy-to-use technology for real business needs.",
    solutions_workflow:   "Workflow Automation",
    solutions_workflow_t: "Reduce manual work and save time.",
    solutions_efficiency:   "Operational Efficiency",
    solutions_efficiency_t: "Get more done with fewer resources.",
    solutions_central:   "Centralized Management",
    solutions_central_t: "Access and manage everything in one place.",
    solutions_scale:   "Scalable Solutions",
    solutions_scale_t: "Grow your business without limits.",

    // About section
    about_eyebrow:  "Why Choose Syncorb",
    about_heading:  "Your Trusted Technology Partner",
    about_body:
      "Syncorb Technologies designs and runs cloud-based SaaS products for growing businesses. We focus on building business-centric software that is reliable, user-friendly and future-ready, so your team spends its time on the business instead of the tools.",
    about_why1_title: "Business Focused",
    about_why1_text:  "Solutions that solve real problems.",
    about_why2_title: "User Friendly",
    about_why2_text:  "Designed for real users.",
    about_why3_title: "Modern Technology",
    about_why3_text:  "Built with the latest technologies.",
    about_why4_title: "Continuous Improvement",
    about_why4_text:  "We keep improving for your success.",

    // CTA Banner
    cta_heading: "Ready to Transform the Way You Work?",
    cta_body:
      "Discover how Syncorb Technologies can help your business work smarter with modern software solutions.",
    cta_btn: "Contact Our Team",

    // Footer
    footer_rights: "All rights reserved.",

    // Contact Page
    contact_heading: "Contact us",
    contact_body:
      "Questions about a product, pricing or a demo? Send us a message and we will reply soon.",
    contact_email:   "Email",
    contact_phone:   "Phone",
    contact_address: "Address",
    contact_hours:   "Hours",

    // Contact Form
    form_product:       "Product",
    form_general:       "General enquiry",
    form_name:          "Name",
    form_phone:         "Phone",
    form_email:         "Email",
    form_message:       "Message",
    form_send:          "Send message",
    form_sending:       "Sending…",
    form_prefill:       "I am interested in learning more about",
    form_err_name:      "Enter your name.",
    form_err_name_len:  "Name must be at least 2 characters.",
    form_err_email:     "Enter your email address.",
    form_err_email_fmt: "Enter a valid email, like name@company.com.",
    form_err_phone:     "Enter your phone number.",
    form_err_phone_fmt: "Enter 7 to 15 digits. You may start with +.",
    form_err_msg:       "Write a short message.",
    form_err_msg_len:   "Message must be at least 10 characters.",
    form_err_network:   "Something went wrong sending your message. Check your connection and try again.",
    form_success_h3:    "Thank you",
    form_success_body:  "We received your message",
    form_success_about: "about",
    form_success_reply: "and will reply to",
    form_success_soon:  "soon.",
    form_close:         "Close",

    // Modal
    modal_title: "Get in touch about",
    modal_body:  "Tell us a little about you and we will get back to you.",
    modal_close: "Close contact form",

    // Product Detail
    pd_back:      "Back to Products",
    pd_get_touch: "Get in Touch",
    pd_watch:     "Watch Demo",
    pd_overview:  "Overview",
    pd_features:  "Key Features",
    pd_why:       "Why Choose",
    pd_who_for:   "Who It's For",
    pd_get_started: "Get Started",
    pd_request_demo: "Request a Demo",
    pd_all_platforms: "All Platforms",
    pd_whycheck1: "Intuitive and easy-to-use interface",
    pd_whycheck2: "Flexible for teams of all sizes",
    pd_whycheck3: "Regular updates and new features",
    pd_whycheck4: "Dedicated support",

    // Not Found
    notfound_heading: "404 – Page not found",
    notfound_body:    "The page you are looking for does not exist.",
    notfound_back:    "Go back home",

    // WhatsApp
    wa_label: "Chat with us on WhatsApp",

    // Theme toggle
    theme_switch: "Switch to",
    theme_light:  "light",
    theme_dark:   "dark",
    theme_mode:   "mode",
  },

  // ── Tamil ─────────────────────────────────────────────────────────────────
  ta: {
    nav_home:      "முகப்பு",
    nav_about:     "எங்களை பற்றி",
    nav_products:  "தயாரிப்புகள்",
    nav_solutions: "தீர்வுகள்",
    nav_contact:   "தொடர்பு",

    hero_eyebrow:  "கண்டுபிடி · உருவாக்கு · வளர்",
    hero_tagline:  "வளரும் வணிகங்களுக்கான புத்திசாலி SaaS தீர்வுகள்",
    hero_intro:
      "Syncorp Technologies வணிகங்கள் செயல்பாடுகளை எளிதாக்கவும், உற்பத்தித்திறனை மேம்படுத்தவும் மற்றும் நம்பிக்கையுடன் வளரவும் உதவும் புதுமையான மென்பொருள் தீர்வுகளை உருவாக்குகிறது.",
    hero_explore:  "தயாரிப்புகளை ஆராயுங்கள்",
    hero_contactUs:"எங்களை தொடர்பு கொள்ளுங்கள்",

    products_eyebrow: "எங்கள் தயாரிப்புகள்",
    products_heading: "நாங்கள் உண்மையான பிரச்சினைகளை தீர்க்க கட்டிய தொழில்நுட்பம்.",
    products_intro:
      "AI/ML மற்றும் FinTech முதல் தளவாடம், கல்வி, நிறுவன SaaS மற்றும் வணிகம் வரை — Syncorp வணிகங்கள் உண்மையில் செயல்படும் விதத்தில் டிஜிட்டல் தயாரிப்புகளையும் தளங்களையும் உருவாக்குகிறது.",
    products_learnMore: "மேலும் அறிக",

    solutions_eyebrow: "எங்கள் தீர்வுகள்",
    solutions_heading: "உங்கள் வணிக இலக்குகளுக்காக கட்டப்பட்டது",
    solutions_body:
      "எங்கள் SaaS தீர்வுகள் உங்களுக்கு அதிக புத்திசாலியாக வேலை செய்ய உதவும் வகையில் வடிவமைக்கப்பட்டுள்ளன.",
    solutions_workflow:   "பணிப்பாய்வு தானியங்குமயமாக்கல்",
    solutions_workflow_t: "கைமுறை வேலையை குறைத்து நேரத்தை சேமிக்கவும்.",
    solutions_efficiency:   "செயல்பாட்டு திறன்",
    solutions_efficiency_t: "குறைவான வளங்களில் அதிகம் செய்யுங்கள்.",
    solutions_central:   "மையப்படுத்தப்பட்ட மேலாண்மை",
    solutions_central_t: "எல்லாவற்றையும் ஒரே இடத்தில் அணுகி நிர்வகிக்கவும்.",
    solutions_scale:   "அளவிடக்கூடிய தீர்வுகள்",
    solutions_scale_t: "வரம்பில்லாமல் உங்கள் வணிகத்தை வளர்க்கவும்.",

    about_eyebrow: "Syncorp ஏன் தேர்வு செய்ய வேண்டும்",
    about_heading: "உங்கள் நம்பகமான தொழில்நுட்ப பங்காளி",
    about_body:
      "Syncorp Technologies வளரும் வணிகங்களுக்காக கிளவுட் அடிப்படையிலான SaaS தயாரிப்புகளை வடிவமைத்து இயக்குகிறது. நம்பகமான, பயனர்-நட்பு மற்றும் எதிர்காலத்திற்கு தயாரான மென்பொருளை உருவாக்குவதில் நாங்கள் கவனம் செலுத்துகிறோம்.",
    about_why1_title: "வணிகம் கவனம்",
    about_why1_text:  "உண்மையான பிரச்சினைகளை தீர்க்கும் தீர்வுகள்.",
    about_why2_title: "பயனர் நட்பு",
    about_why2_text:  "உண்மையான பயனர்களுக்காக வடிவமைக்கப்பட்டது.",
    about_why3_title: "நவீன தொழில்நுட்பம்",
    about_why3_text:  "சமீபத்திய தொழில்நுட்பங்களால் கட்டப்பட்டது.",
    about_why4_title: "தொடர் மேம்பாடு",
    about_why4_text:  "உங்கள் வெற்றிக்காக நாங்கள் தொடர்ந்து மேம்படுகிறோம்.",

    cta_heading: "உங்கள் வேலை செய்யும் முறையை மாற்ற தயாரா?",
    cta_body:
      "Syncorp Technologies உங்கள் வணிகம் நவீன மென்பொருள் தீர்வுகளுடன் புத்திசாலியாக வேலை செய்ய எவ்வாறு உதவும் என்று கண்டறியுங்கள்.",
    cta_btn: "எங்கள் குழுவை தொடர்பு கொள்ளுங்கள்",

    footer_rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

    contact_heading: "எங்களை தொடர்பு கொள்ளுங்கள்",
    contact_body:
      "ஒரு தயாரிப்பு, விலை நிர்ணயம் அல்லது டெமோ பற்றி கேள்விகள் இருக்கின்றனவா? எங்களுக்கு ஒரு செய்தி அனுப்புங்கள், விரைவில் பதிலளிக்கிறோம்.",
    contact_email:   "மின்னஞ்சல்",
    contact_phone:   "தொலைபேசி",
    contact_address: "முகவரி",
    contact_hours:   "நேரம்",

    form_product:       "தயாரிப்பு",
    form_general:       "பொது விசாரணை",
    form_name:          "பெயர்",
    form_phone:         "தொலைபேசி",
    form_email:         "மின்னஞ்சல்",
    form_message:       "செய்தி",
    form_send:          "செய்தி அனுப்பு",
    form_sending:       "அனுப்புகிறோம்…",
    form_prefill:       "பற்றி மேலும் அறிய விரும்புகிறேன்",
    form_err_name:      "உங்கள் பெயரை உள்ளிடவும்.",
    form_err_name_len:  "பெயர் குறைந்தது 2 எழுத்துக்கள் இருக்க வேண்டும்.",
    form_err_email:     "உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடவும்.",
    form_err_email_fmt: "சரியான மின்னஞ்சலை உள்ளிடவும், எ.கா. பெயர்@நிறுவனம்.com.",
    form_err_phone:     "உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்.",
    form_err_phone_fmt: "7 முதல் 15 இலக்கங்கள் உள்ளிடவும். + உடன் தொடங்கலாம்.",
    form_err_msg:       "குறுகிய செய்தி எழுதவும்.",
    form_err_msg_len:   "செய்தி குறைந்தது 10 எழுத்துக்கள் இருக்க வேண்டும்.",
    form_err_network:   "செய்தி அனுப்புவதில் பிழை. உங்கள் இணைப்பை சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
    form_success_h3:    "நன்றி",
    form_success_body:  "உங்கள் செய்தியை பெற்றோம்",
    form_success_about: "பற்றி",
    form_success_reply: "என்று பதிலளிக்கிறோம்",
    form_success_soon:  "விரைவில்.",
    form_close:         "மூடு",

    modal_title: "தொடர்பு கொள்ளுங்கள்",
    modal_body:  "உங்களைப் பற்றி சிறிது சொல்லுங்கள், நாங்கள் உங்களை தொடர்பு கொள்கிறோம்.",
    modal_close: "தொடர்பு படிவத்தை மூடு",

    pd_back:      "தயாரிப்புகளுக்கு திரும்பு",
    pd_get_touch: "தொடர்பு கொள்ளுங்கள்",
    pd_watch:     "டெமோ பாருங்கள்",
    pd_overview:  "கண்ணோட்டம்",
    pd_features:  "முக்கிய அம்சங்கள்",
    pd_why:       "ஏன் தேர்வு செய்ய வேண்டும்",
    pd_who_for:   "யாருக்காக",
    pd_get_started: "தொடங்குங்கள்",
    pd_request_demo: "டெமோ கோரவும்",
    pd_all_platforms: "அனைத்து தளங்களும்",
    pd_whycheck1: "உள்ளுணர்வு மற்றும் பயன்படுத்த எளிதான இடைமுகம்",
    pd_whycheck2: "எல்லா அளவிலான குழுக்களுக்கும் நெகிழ்வானது",
    pd_whycheck3: "தொடர்ந்து புதுப்பிப்புகள் மற்றும் புதிய அம்சங்கள்",
    pd_whycheck4: "அர்ப்பணிப்பு ஆதரவு",

    notfound_heading: "404 – பக்கம் கிடைக்கவில்லை",
    notfound_body:    "நீங்கள் தேடும் பக்கம் இல்லை.",
    notfound_back:    "முகப்பு பக்கம் செல்க",

    wa_label: "WhatsApp இல் நம்முடன் அரட்டை பேசுங்கள்",

    theme_switch: "மாற்று",
    theme_light:  "வெளிர்",
    theme_dark:   "இருண்ட",
    theme_mode:   "பயன்முறை",
  },

  // ── Hindi ─────────────────────────────────────────────────────────────────
  hi: {
    nav_home:      "होम",
    nav_about:     "हमारे बारे में",
    nav_products:  "उत्पाद",
    nav_solutions: "समाधान",
    nav_contact:   "संपर्क",

    hero_eyebrow:  "नवाचार · निर्माण · विकास",
    hero_tagline:  "बढ़ते व्यवसायों के लिए स्मार्ट SaaS समाधान",
    hero_intro:
      "Syncorp Technologies नवाचारी सॉफ़्टवेयर समाधान बनाती है जो व्यवसायों को संचालन सुव्यवस्थित करने, उत्पादकता बढ़ाने और आत्मविश्वास के साथ बढ़ने में मदद करते हैं।",
    hero_explore:  "उत्पाद देखें",
    hero_contactUs: "हमसे संपर्क करें",

    products_eyebrow: "हमारे उत्पाद",
    products_heading: "हमने जो तकनीक असली समस्याओं को हल करने के लिए बनाई है।",
    products_intro:
      "AI/ML और FinTech से लेकर लॉजिस्टिक्स, शिक्षा, एंटरप्राइज़ SaaS और कॉमर्स तक — Syncorp डिजिटल उत्पाद और प्लेटफ़ॉर्म उस तरीके से बनाता है जिस तरह से व्यवसाय वास्तव में काम करते हैं।",
    products_learnMore: "और जानें",

    solutions_eyebrow: "हमारे समाधान",
    solutions_heading: "आपके व्यावसायिक लक्ष्यों के लिए निर्मित",
    solutions_body:
      "हमारे SaaS समाधान आपको होशियारी से काम करने में मदद करने के लिए डिज़ाइन किए गए हैं।",
    solutions_workflow:   "वर्कफ़्लो स्वचालन",
    solutions_workflow_t: "मैन्युअल काम कम करें और समय बचाएं।",
    solutions_efficiency:   "परिचालन दक्षता",
    solutions_efficiency_t: "कम संसाधनों में अधिक करें।",
    solutions_central:   "केंद्रीकृत प्रबंधन",
    solutions_central_t: "एक ही जगह से सब कुछ एक्सेस और प्रबंधित करें।",
    solutions_scale:   "स्केलेबल समाधान",
    solutions_scale_t: "बिना सीमाओं के अपना व्यवसाय बढ़ाएं।",

    about_eyebrow: "Syncorp क्यों चुनें",
    about_heading: "आपका विश्वसनीय तकनीकी भागीदार",
    about_body:
      "Syncorp Technologies बढ़ते व्यवसायों के लिए क्लाउड-आधारित SaaS उत्पादों को डिज़ाइन और संचालित करती है। हम विश्वसनीय, उपयोगकर्ता-अनुकूल और भविष्य के लिए तैयार सॉफ़्टवेयर बनाने पर ध्यान केंद्रित करते हैं।",
    about_why1_title: "व्यवसाय केंद्रित",
    about_why1_text:  "वास्तविक समस्याओं को हल करने वाले समाधान।",
    about_why2_title: "उपयोगकर्ता अनुकूल",
    about_why2_text:  "वास्तविक उपयोगकर्ताओं के लिए डिज़ाइन किया गया।",
    about_why3_title: "आधुनिक तकनीक",
    about_why3_text:  "नवीनतम तकनीकों के साथ निर्मित।",
    about_why4_title: "निरंतर सुधार",
    about_why4_text:  "आपकी सफलता के लिए हम लगातार सुधार करते हैं।",

    cta_heading: "अपने काम करने के तरीके को बदलने के लिए तैयार हैं?",
    cta_body:
      "जानें कि Syncorp Technologies कैसे आपके व्यवसाय को आधुनिक सॉफ़्टवेयर समाधानों के साथ होशियारी से काम करने में मदद कर सकती है।",
    cta_btn: "हमारी टीम से संपर्क करें",

    footer_rights: "सर्वाधिकार सुरक्षित।",

    contact_heading: "हमसे संपर्क करें",
    contact_body:
      "किसी उत्पाद, मूल्य निर्धारण या डेमो के बारे में प्रश्न? हमें एक संदेश भेजें और हम जल्द ही जवाब देंगे।",
    contact_email:   "ईमेल",
    contact_phone:   "फ़ोन",
    contact_address: "पता",
    contact_hours:   "समय",

    form_product:       "उत्पाद",
    form_general:       "सामान्य पूछताछ",
    form_name:          "नाम",
    form_phone:         "फ़ोन",
    form_email:         "ईमेल",
    form_message:       "संदेश",
    form_send:          "संदेश भेजें",
    form_sending:       "भेज रहे हैं…",
    form_prefill:       "के बारे में अधिक जानना चाहता/चाहती हूँ",
    form_err_name:      "अपना नाम दर्ज करें।",
    form_err_name_len:  "नाम कम से कम 2 अक्षर का होना चाहिए।",
    form_err_email:     "अपना ईमेल पता दर्ज करें।",
    form_err_email_fmt: "एक वैध ईमेल दर्ज करें, जैसे name@company.com.",
    form_err_phone:     "अपना फ़ोन नंबर दर्ज करें।",
    form_err_phone_fmt: "7 से 15 अंक दर्ज करें। आप + से शुरू कर सकते हैं।",
    form_err_msg:       "एक संक्षिप्त संदेश लिखें।",
    form_err_msg_len:   "संदेश कम से कम 10 अक्षर का होना चाहिए।",
    form_err_network:   "संदेश भेजने में कुछ गड़बड़ हुई। अपना कनेक्शन जांचें और पुनः प्रयास करें।",
    form_success_h3:    "धन्यवाद",
    form_success_body:  "हमें आपका संदेश मिला",
    form_success_about: "के बारे में",
    form_success_reply: "पर जवाब देंगे",
    form_success_soon:  "जल्द ही।",
    form_close:         "बंद करें",

    modal_title: "संपर्क करें",
    modal_body:  "हमें अपने बारे में थोड़ा बताएं और हम आपसे वापस संपर्क करेंगे।",
    modal_close: "संपर्क फ़ॉर्म बंद करें",

    pd_back:      "उत्पादों पर वापस जाएं",
    pd_get_touch: "संपर्क करें",
    pd_watch:     "डेमो देखें",
    pd_overview:  "अवलोकन",
    pd_features:  "मुख्य विशेषताएं",
    pd_why:       "क्यों चुनें",
    pd_who_for:   "किसके लिए है",
    pd_get_started: "शुरू करें",
    pd_request_demo: "डेमो अनुरोध करें",
    pd_all_platforms: "सभी प्लेटफ़ॉर्म",
    pd_whycheck1: "सहज और उपयोग में आसान इंटरफ़ेस",
    pd_whycheck2: "सभी आकार की टीमों के लिए लचीला",
    pd_whycheck3: "नियमित अपडेट और नई सुविधाएं",
    pd_whycheck4: "समर्पित समर्थन",

    notfound_heading: "404 – पेज नहीं मिला",
    notfound_body:    "जिस पेज को आप ढूंढ रहे हैं वह मौजूद नहीं है।",
    notfound_back:    "होम पर वापस जाएं",

    wa_label: "WhatsApp पर हमसे चैट करें",

    theme_switch: "स्विच करें",
    theme_light:  "लाइट",
    theme_dark:   "डार्क",
    theme_mode:   "मोड",
  },

  // ── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    nav_home:      "الرئيسية",
    nav_about:     "من نحن",
    nav_products:  "المنتجات",
    nav_solutions: "الحلول",
    nav_contact:   "اتصل بنا",

    hero_eyebrow:  "ابتكر · ابنِ · انمُ",
    hero_tagline:  "حلول SaaS ذكية للشركات النامية",
    hero_intro:
      "تبني Syncorp Technologies حلول برمجية مبتكرة تساعد الشركات على تبسيط العمليات وتحسين الإنتاجية والنمو بثقة.",
    hero_explore:  "استكشف المنتجات",
    hero_contactUs: "تواصل معنا",

    products_eyebrow: "منتجاتنا",
    products_heading: "التكنولوجيا التي بنيناها لحل مشاكل حقيقية.",
    products_intro:
      "من الذكاء الاصطناعي والتقنية المالية إلى اللوجستيات والتعليم وتطبيقات SaaS للمؤسسات والتجارة — تبني Syncorp منتجات وأنظمة رقمية بالطريقة التي تعمل بها الشركات فعلاً.",
    products_learnMore: "اعرف أكثر",

    solutions_eyebrow: "حلولنا",
    solutions_heading: "مبنية لأهدافك التجارية",
    solutions_body:
      "تم تصميم حلول SaaS الخاصة بنا لمساعدتك على العمل بذكاء أكبر وليس بجهد أكبر.",
    solutions_workflow:   "أتمتة سير العمل",
    solutions_workflow_t: "قلل العمل اليدوي ووفر الوقت.",
    solutions_efficiency:   "الكفاءة التشغيلية",
    solutions_efficiency_t: "أنجز المزيد بموارد أقل.",
    solutions_central:   "الإدارة المركزية",
    solutions_central_t: "الوصول وإدارة كل شيء في مكان واحد.",
    solutions_scale:   "حلول قابلة للتوسع",
    solutions_scale_t: "نمّ عملك دون حدود.",

    about_eyebrow: "لماذا تختار Syncorp",
    about_heading: "شريكك التقني الموثوق",
    about_body:
      "تصمم Syncorp Technologies وتُشغّل منتجات SaaS سحابية للشركات النامية. نركز على بناء برامج موثوقة وسهلة الاستخدام وجاهزة للمستقبل.",
    about_why1_title: "التركيز على الأعمال",
    about_why1_text:  "حلول تحل مشاكل حقيقية.",
    about_why2_title: "سهل الاستخدام",
    about_why2_text:  "مصمم للمستخدمين الحقيقيين.",
    about_why3_title: "تقنية حديثة",
    about_why3_text:  "مبني بأحدث التقنيات.",
    about_why4_title: "تحسين مستمر",
    about_why4_text:  "نواصل التحسين من أجل نجاحك.",

    cta_heading: "هل أنت مستعد لتحويل طريقة عملك؟",
    cta_body:
      "اكتشف كيف يمكن لـ Syncorp Technologies مساعدة عملك على العمل بشكل أذكى مع حلول البرمجيات الحديثة.",
    cta_btn: "تواصل مع فريقنا",

    footer_rights: "جميع الحقوق محفوظة.",

    contact_heading: "تواصل معنا",
    contact_body:
      "هل لديك أسئلة حول منتج أو تسعير أو عرض توضيحي؟ أرسل لنا رسالة وسنرد قريباً.",
    contact_email:   "البريد الإلكتروني",
    contact_phone:   "الهاتف",
    contact_address: "العنوان",
    contact_hours:   "ساعات العمل",

    form_product:       "المنتج",
    form_general:       "استفسار عام",
    form_name:          "الاسم",
    form_phone:         "الهاتف",
    form_email:         "البريد الإلكتروني",
    form_message:       "الرسالة",
    form_send:          "إرسال الرسالة",
    form_sending:       "جاري الإرسال…",
    form_prefill:       "أنا مهتم بمعرفة المزيد عن",
    form_err_name:      "الرجاء إدخال اسمك.",
    form_err_name_len:  "يجب أن يكون الاسم على الأقل حرفين.",
    form_err_email:     "الرجاء إدخال عنوان بريدك الإلكتروني.",
    form_err_email_fmt: "الرجاء إدخال بريد إلكتروني صحيح، مثل name@company.com.",
    form_err_phone:     "الرجاء إدخال رقم هاتفك.",
    form_err_phone_fmt: "أدخل من 7 إلى 15 رقماً. يمكنك البدء بـ +.",
    form_err_msg:       "الرجاء كتابة رسالة قصيرة.",
    form_err_msg_len:   "يجب أن تكون الرسالة 10 أحرف على الأقل.",
    form_err_network:   "حدث خطأ أثناء إرسال رسالتك. تحقق من اتصالك وحاول مرة أخرى.",
    form_success_h3:    "شكراً لك",
    form_success_body:  "لقد استلمنا رسالتك",
    form_success_about: "حول",
    form_success_reply: "وسنرد على",
    form_success_soon:  "قريباً.",
    form_close:         "إغلاق",

    modal_title: "تواصل معنا حول",
    modal_body:  "أخبرنا قليلاً عن نفسك وسنتواصل معك.",
    modal_close: "إغلاق نموذج الاتصال",

    pd_back:      "العودة إلى المنتجات",
    pd_get_touch: "تواصل معنا",
    pd_watch:     "شاهد العرض التوضيحي",
    pd_overview:  "نظرة عامة",
    pd_features:  "الميزات الرئيسية",
    pd_why:       "لماذا تختار",
    pd_who_for:   "لمن هو",
    pd_get_started: "ابدأ الآن",
    pd_request_demo: "طلب عرض توضيحي",
    pd_all_platforms: "جميع المنصات",
    pd_whycheck1: "واجهة سهلة الاستخدام",
    pd_whycheck2: "مرن لجميع أحجام الفرق",
    pd_whycheck3: "تحديثات منتظمة وميزات جديدة",
    pd_whycheck4: "دعم مخصص",

    notfound_heading: "404 – الصفحة غير موجودة",
    notfound_body:    "الصفحة التي تبحث عنها غير موجودة.",
    notfound_back:    "العودة إلى الرئيسية",

    wa_label: "تحدث معنا على WhatsApp",

    theme_switch: "التبديل إلى",
    theme_light:  "فاتح",
    theme_dark:   "داكن",
    theme_mode:   "وضع",
  },
};
