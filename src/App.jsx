
import React, { useState } from "react";
import "./App.css";

const products = [
  {
    id: "01",
    name: "Mint Velvet",
    category: "DARK CHOCOLATE · MINT",
    price: "₹490",
    className: "mint",
    symbol: "✳",
  },
  {
    id: "02",
    name: "Midnight Cacao",
    category: "SINGLE ORIGIN · 72%",
    price: "₹590",
    className: "cacao",
    symbol: "✦",
  },
  {
    id: "03",
    name: "Pistachio Silk",
    category: "WHITE CHOCOLATE · NUT",
    price: "₹650",
    className: "pistachio",
    symbol: "❋",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="noire">
      {/* NAVIGATION */}
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu}>
          NOIRÉ<span>®</span>
        </a>

        <button
          className="mobile-menu"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "navigation is-open" : "navigation"}>
          <a href="#story" onClick={closeMenu}>Our philosophy</a>
          <a href="#collection" onClick={closeMenu}>Collection</a>
          <a href="#craft" onClick={closeMenu}>The craft</a>
          <a className="header-cta" href="#collection" onClick={closeMenu}>
            Discover NOIRÉ <span>↗</span>
          </a>
        </nav>
      </header>

      {/* CINEMATIC HERO */}
      <section className="hero" id="home">
        <video
          className="hero-motion"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Chocolate and mint cream cinematic product film"
        >
          <source src="/chocolate.mp4" type="video/mp4" />
        </video>

        <div className="hero-shade" />

        <div className="hero-meta">
          <span>THE ART OF INDULGENCE</span>
          <span>EST. MMXXVI</span>
        </div>

        <div className="hero-copy">
          <span className="overline">
            <i /> A NEW KIND OF DECADENCE
          </span>

          <h1>
            Indulge
            <br />
            in the <em>extraordinary.</em>
          </h1>

          <p>
            Where fine cacao meets cool mint.
            A sensory experience, crafted to linger.
          </p>

          <div className="hero-buttons">
            <a href="#collection" className="solid-button">
              Explore the collection <span>↗</span>
            </a>
            <a href="#story" className="minimal-button">
              Our story <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 — A STUDY IN CONTRAST</span>
          <span className="hero-scroll">SCROLL TO DISCOVER ↓</span>
          <span>PURE. BOLD. UNEXPECTED.</span>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="philosophy" id="story">
        <div className="philosophy-top">
          <span className="eyebrow-dark">THE NOIRÉ PHILOSOPHY</span>
          <span className="chapter">CHAPTER 01 / 03</span>
        </div>

        <div className="philosophy-content">
          <h2>
            Not simply chocolate.
            <br />
            <em>An art form.</em>
          </h2>

          <div className="philosophy-description">
            <span className="decorative-star">✳</span>
            <p>
              Created for those who appreciate the finer
              details. Deep cacao, delicate textures, and
              unexpected notes come together in a ritual
              worth slowing down for.
            </p>
            <a href="#craft" className="text-link">
              Discover our philosophy <span>↗</span>
            </a>
          </div>
        </div>

        <div className="manifesto">
          <span>LESS ORDINARY</span>
          <span className="manifesto-star">✳</span>
          <span>MORE SENSORY</span>
          <span className="manifesto-star">✳</span>
          <span>ALWAYS EXCEPTIONAL</span>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="collection" id="collection">
        <div className="collection-heading">
          <div>
            <span className="eyebrow-light">02 / THE COLLECTION</span>
            <h2>A taste of <em>the rare.</em></h2>
          </div>

          <p>
            Thoughtfully composed.
            <br />
            Unmistakably NOIRÉ.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className={`product-visual ${product.className}`}>
                <span className="product-number">{product.id}</span>
                <span className="product-edition">SIGNATURE SERIES</span>

                <div className="chocolate-art">
                  <div className="chocolate-shadow" />
                  <div className="chocolate-box">
                    <div className="box-edge" />
                    <div className="box-content">
                      <span className="box-edition">MAISON NOIRÉ</span>
                      <span className="box-symbol">{product.symbol}</span>
                      <strong>NOIRÉ</strong>
                      <span className="box-flavor">
                        {product.name.toUpperCase()}
                      </span>
                      <span className="box-weight">FINE CHOCOLATE · 100 G</span>
                    </div>
                  </div>
                </div>

                <span className="product-origin">CRAFTED WITH INTENTION</span>
              </div>

              <div className="product-details">
                <div>
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                </div>

                <span className="product-price">{product.price}</span>
              </div>

              <button
                className="product-action"
                onClick={() => setSelectedProduct(product)}
              >
                Discover this creation <span>↗</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* CRAFT SECTION */}
      <section className="craft" id="craft">
        <div className="craft-visual">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/chocolate.mp4" type="video/mp4" />
          </video>
          <div className="craft-stamp">
            <span>THE ART</span>
            <strong>✳</strong>
            <span>OF CACAO</span>
          </div>
        </div>

        <div className="craft-copy">
          <span className="eyebrow-light">03 / THE CRAFT</span>

          <h2>
            Every detail.
            <br />
            <em>Considered.</em>
          </h2>

          <p>
            From the first note of cacao to the final
            melt, every detail is part of the experience.
            Refined textures. Beautiful contrasts.
            A finish that stays with you.
          </p>

          <div className="craft-points">
            <div>
              <span>01</span>
              <p>Characterful cacao</p>
            </div>
            <div>
              <span>02</span>
              <p>Unexpected pairings</p>
            </div>
            <div>
              <span>03</span>
              <p>Made for the senses</p>
            </div>
          </div>

          <a href="#collection" className="solid-button">
            Find your favourite <span>↗</span>
          </a>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing">
        <span className="eyebrow-light">A MOMENT, JUST FOR YOU</span>

        <h2>
          Make room
          <br />
          for <em>pleasure.</em>
        </h2>

        <p>
          The day can wait. This moment is yours.
        </p>

        <a href="#collection" className="light-button">
          Explore NOIRÉ <span>↗</span>
        </a>

        <div className="closing-decoration">✳</div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="footer-brand">
            NOIRÉ<span>®</span>
          </a>

          <p>
            An expression of fine chocolate.
            <br />
            A celebration of the senses.
          </p>

          <a className="footer-email" href="mailto:hello@noire.example">
            Get in touch ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NOIRÉ STUDIO</span>
          <span>CRAFTED WITH INTENTION</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProduct(null)}
        >
          <section
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProduct.name}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Close"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>

            <span className="eyebrow-dark">THE SIGNATURE COLLECTION</span>
            <span className="modal-symbol">{selectedProduct.symbol}</span>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.category}</p>
            <strong>{selectedProduct.price}</strong>
            <p className="modal-note">
              A signature creation from the NOIRÉ collection.
              Contact us to enquire about availability.
            </p>
            <a
              className="solid-button"
              href={`mailto:hello@noire.example?subject=${encodeURIComponent(
                `Enquiry about ${selectedProduct.name}`
              )}`}
            >
              Enquire about this creation <span>↗</span>
            </a>
          </section>
        </div>
      )}
    </main>
  );
}
