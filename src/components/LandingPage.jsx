import React from "react";
import "./LandingPage.css";
import { FaWhatsapp, FaTrophy, FaGamepad, FaTelegram } from "react-icons/fa";
import { GiCrown } from "react-icons/gi";
import wingo from "./Assets/wingo.png";
import slots from "./Assets/slots.png";
import sports from "./Assets/sports.png";
import casino from "./Assets/casino.png";
import lottery from "./Assets/lottery.png";
import mini_games from "./Assets/minigames.png";
import hot_slots from "./Assets/hotslots.png";
import fishing from "./Assets/fishing.png";
import pvc from "./Assets/pvc.png";
const LandingPage = () => {
  return (
    <div className="landing">
      <section className="hero">
        <h1 className="glow-text">Play & Win Big with ABD909</h1>
        <p className="hero-sub">
          Join thousands of players winning daily in live casino games,
          lotteries, and slots.
        </p>
        <div className="icon-btn">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn pulse"
          >
            <FaWhatsapp /> Get Your ID on WhatsApp
          </a>
          <a
            href="https://t.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn pulse"
          >
            <FaTelegram /> Get Your ID on Telegram
          </a>
        </div>
      </section>

      <section className="features">
        <div className="feature-card glass">
          <FaGamepad className="icon" />
          <h3>Exciting Live Games</h3>
        </div>
        <div className="feature-card glass">
          <FaTrophy className="icon" />
          <h3>Fast Deposit & Withdrawal</h3>
        </div>
        <div className="feature-card glass">
          <GiCrown className="icon" />
          <h3>Safe & Fair Play</h3>
        </div>
        <div className="feature-card glass">
          <FaGamepad className="icon" />
          <h3>Exciting Bonuses</h3>
        </div>
      </section>

      <section className="games">
        <h2 className="glow-text">Explore Your Favorite Games</h2>
        <div className="game-grid">
          {[
            { name: "Skill Base Game", img: lottery },
            { name: "Mini Games", img: mini_games },
            { name: "Hot Slots", img: hot_slots },
            { name: "Slots", img: slots },
            { name: "Fishing", img: fishing },
            { name: "PVC", img: pvc },
            { name: "Latest Game", img: casino },
            { name: "Sports", img: sports },
          ].map((game, i) => (
            <div key={i} className="game-card glass-hover">
              <img src={game.img} alt={game.name} className="game-img" />
              <h4>{game.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="leaderboard">
        <h2 className="glow-text">Top Winners</h2>
        <div className="leaderboard-box glass">
          {[
            { name: "vik***gat", amount: "₹9,142,567,913.36" },
            { name: "Mem***MEE", amount: "₹6,372,704,800.00" },
            { name: "Mem***GYY", amount: "₹5,932,920,000.00" },
          ].map((winner, i) => (
            <div key={i} className="leaderboard-item">
              <div className="player">
                <GiCrown className="crown" /> {winner.name}
              </div>
              <div className="amount">{winner.amount}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2 className="glow-text">Your Next Big Win Starts Now!</h2>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn pulse"
        >
          <FaWhatsapp /> Start ID on WhatsApp
        </a>
      </section>

      <footer>© 2025 ABD909 | Play Responsibly</footer>
    </div>
  );
};

export default LandingPage;
