import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // If user clicks a hash link while not on home, push to home with hash
  useEffect(() => {
    if ((pathname !== "/") && (hash === "#about" || hash === "#services" || hash === "#faqs")) {
      navigate("/" + hash);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, pathname]);

  return null;
}
