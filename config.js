/* ==========================================================
   إعدادات الربط بقاعدة البيانات المشتركة — المعهد الأوليمبي
   ----------------------------------------------------------
   الـ URL اتحط جاهز. فاضل حاجة واحدة بس:

   الصق المفتاح (Publishable key) مكان الكلام الأحمر تحت،
   جوّه علامات التنصيص بالظبط، من غير مسافات.

   المفتاح شكله كده:  sb_publishable_AbCdEf123456...
   ========================================================== */

window.CRM_CONFIG = {

  supabaseUrl: "https://fdbtotpcbhzncyfhvzts.supabase.co",

  supabaseKey: "sb_publishable_tdWh7Ojc_mYCl0FPlqDdLg_WZNAlNfi"

};


/* ما تغيّرش أي حاجة تحت السطر ده */
window.CRM_CONFIG.url = window.CRM_CONFIG.url || window.CRM_CONFIG.supabaseUrl;
window.CRM_CONFIG.key = window.CRM_CONFIG.key || window.CRM_CONFIG.supabaseKey;
