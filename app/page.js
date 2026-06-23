export default function Home() {
  return (
    <main
      style={{
        background: "#0f0f0f",
        color: "white",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            color: "#C9A46A",
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          ONE WOOD
        </h1>

        <h2
          style={{
            fontSize: "26px",
            marginBottom: "20px",
          }}
        >
          طراحی و اجرای کابینت و دکوراسیون داخلی مدرن
        </h2>

        <p
          style={{
            color: "#ccc",
            fontSize: "18px",
          }}
        >
          طراحی اختصاصی • کیفیت بالا • اجرای حرفه‌ای
        </p>

        <a
          href="tel:09147233274"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "14px 30px",
            background: "#C9A46A",
            color: "#000",
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          تماس مستقیم
        </a>
      </section>

      {/* Services */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#C9A46A" }}>خدمات ما</h2>

        <div
          style={{
            maxWidth: "900px",
            margin: "40px auto",
            display: "grid",
            gap: "20px",
          }}
        >
          <div style={card}>
            کابینت مدرن و کلاسیک
          </div>

          <div style={card}>
            طراحی تی وی وال
          </div>

          <div style={card}>
            کمد دیواری و کلوزت
          </div>

          <div style={card}>
            بازسازی و دکوراسیون داخلی
          </div>
        </div>
      </section>

      {/* About */}
      <section
        style={{
          padding: "60px 20px",
          background: "#181818",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#C9A46A" }}>
          درباره ONE WOOD
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            lineHeight: "2",
            color: "#ddd",
          }}
        >
          ما در ONE WOOD با تمرکز بر طراحی مدرن،
          کیفیت ساخت بالا و اجرای دقیق،
          فضاهای لوکس و کاربردی برای خانه و محل کار شما
          خلق می‌کنیم.
        </p>
      </section>

      {/* Contact */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#C9A46A" }}>
          ارتباط با ما
        </h2>

        <p>ارومیه</p>

        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          09147233274
        </p>

        <a
          href="https://wa.me/989147233274"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "15px 35px",
            background: "#25D366",
            color: "white",
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          واتساپ
        </a>
      </section>
    </main>
  );
}

const card = {
  background: "#1f1f1f",
  padding: "25px",
  borderRadius: "12px",
  color: "#fff",
  fontSize: "18px",
};
