import { motion } from "framer-motion";
import newsBg from "../../assets/common/newsletter-bg.png";

export default function Newsletter() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${newsBg})` }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Label */}
          <div className="text-[11px] md:text-sm uppercase tracking-[0.25em] text-white/60">
            InvestNaija Insights
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight text-white">
            Stay ahead with{" "}
            <span className="text-[#e55356]">smarter money insights.</span>
          </h2>

          <p className="mt-6 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
            Get weekly insights on saving, investing, and smart financial
            habits.
          </p>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <div className="w-full max-w-2xl">
              <form
                method="POST"
                action="https://qlitn-zgpm.maillist-manage.com/weboptin.zc"
                target="_zcSignup"
                className="flex flex-col sm:flex-row items-stretch gap-3"
                onSubmit={(e) => {
                  const form = e.currentTarget;
                  const spm = form.querySelector("#zc_spmSubmit");
                  if (spm) spm.remove();
                }}
              >
                {/* Email */}
                <input
                  type="email"
                  name="CONTACT_EMAIL"
                  placeholder="Email address"
                  className="flex-1 h-[52px] px-4 rounded-xl
                  bg-white/10 backdrop-blur-xl border border-white/20
                  text-white placeholder-white/50 outline-none
                  focus:border-[#e55356] transition"
                />

                {/* First name */}
                <input
                  type="text"
                  name="LASTNAME"
                  placeholder="First name"
                  className="sm:w-[180px] h-[52px] px-4 rounded-xl
                  bg-white/10 backdrop-blur-xl border border-white/20
                  text-white placeholder-white/50 outline-none
                  focus:border-[#e55356] transition"
                />

                {/* Button */}
                <button
                  type="submit"
                  className="h-[52px] px-6 rounded-xl bg-white text-black font-medium
                  hover:bg-white/90 transition shadow-lg cursor-pointer"
                >
                  Subscribe
                </button>

                {/* Hidden Zoho fields */}
                <input
                  type="hidden"
                  name="submitType"
                  value="optinCustomView"
                />
                <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW" />
                <input
                  type="hidden"
                  id="zc_spmSubmit"
                  name="zc_spmSubmit"
                  value="ZCSPMSUBMIT"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
