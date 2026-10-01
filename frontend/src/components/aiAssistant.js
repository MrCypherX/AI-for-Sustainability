// Floating AI Assistant Component ("Nourish AI")
import { icons } from '../icons.js';
import { store } from '../data/store.js';
import { toast } from './toast.js';
import { listingModal } from './listingModal.js';

export class AiAssistant {
  constructor() {
    this.isOpen = false;
    this.messages = [
      {
        sender: 'assistant',
        text: "Hello Ananya! I’m **Nourish AI**, your kitchen sustainability companion. How can I help you optimize food prep and rescue surplus today?",
        timestamp: "Just now"
      }
    ];

    this.quickPrompts = [
      "How can I reduce tomorrow’s waste?",
      "Find a nearby NGO.",
      "Explain my sustainability score.",
      "Create a surplus listing.",
      "Show this month’s impact."
    ];

    this.render();
    this.attachEvents();
  }

  render() {
    let existing = document.getElementById('aiAssistantContainer');
    if (existing) existing.remove();

    const wrap = document.createElement('div');
    wrap.id = 'aiAssistantContainer';
    wrap.className = 'floating-assistant-wrap';

    wrap.innerHTML = `
      <!-- Floating Action Button -->
      <button class="assistant-fab" id="toggleAiFab" title="Chat with Nourish AI" aria-label="Open AI Assistant">
        <div class="assistant-pulse"></div>
        ${icons.ai(26)}
      </button>

      <!-- Assistant Dialog Window -->
      <div class="assistant-window" id="assistantWindow">
        <!-- Window Header -->
        <div class="assistant-header">
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <div style="width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;color:#34D399;">
              ${icons.ai(20)}
            </div>
            <div>
              <div style="font-family:var(--font-display);font-size:1.05rem;font-weight:700;">Nourish AI</div>
              <div style="font-size:0.7rem;color:#A7F3D0;display:flex;align-items:center;gap:0.35rem;">
                <span style="width:6px;height:6px;border-radius:50%;background:#34D399;display:inline-block;"></span>
                Online & Ready
              </div>
            </div>
          </div>

          <button class="icon-btn" id="closeAssistantBtn" style="color:white;border-color:rgba(255,255,255,0.2);width:32px;height:32px;">
            ${icons.close(16)}
          </button>
        </div>

        <!-- Chat Conversation Body -->
        <div class="assistant-chat-body" id="assistantChatBody">
          ${this.messages.map(m => `
            <div class="chat-bubble ${m.sender === 'user' ? 'chat-user' : 'chat-assistant'}">
              ${this.formatMessage(m.text)}
              ${m.actionBtn ? `
                <div style="margin-top:0.6rem;">
                  <button class="btn-forest" style="padding:0.35rem 0.85rem;font-size:0.75rem;" data-action="${m.actionBtn.type}">
                    ${m.actionBtn.label}
                  </button>
                </div>
              ` : ''}
            </div>
          `).join('')}

          <!-- Quick Prompts Wrap -->
          <div style="margin-top:0.5rem;">
            <div style="font-size:0.7rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;margin-bottom:0.35rem;">
              Quick suggestions:
            </div>
            <div class="prompt-chips-wrap">
              ${this.quickPrompts.map(p => `
                <button class="prompt-chip" data-prompt="${p}">
                  ${p}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="assistant-input-area">
          <input 
            type="text" 
            class="assistant-text-input" 
            id="assistantInput" 
            placeholder="Ask anything about meals, NGOs, or waste..."
          />
          <button class="icon-btn" id="sendAssistantBtn" style="background:var(--primary-forest);color:white;border:none;">
            ${icons.send(16)}
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(wrap);
  }

  formatMessage(text) {
    // Simple markdown bold formatting
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  attachEvents() {
    const fab = document.getElementById('toggleAiFab');
    const win = document.getElementById('assistantWindow');
    const closeBtn = document.getElementById('closeAssistantBtn');
    const sendBtn = document.getElementById('sendAssistantBtn');
    const input = document.getElementById('assistantInput');

    if (fab) {
      fab.onclick = () => {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
          win.classList.add('open');
          input.focus();
        } else {
          win.classList.remove('open');
        }
      };
    }

    if (closeBtn) {
      closeBtn.onclick = () => {
        this.isOpen = false;
        win.classList.remove('open');
      };
    }

    const handleSend = (userText) => {
      const text = userText || (input ? input.value.trim() : '');
      if (!text) return;

      this.messages.push({
        sender: 'user',
        text: text,
        timestamp: 'Just now'
      });

      if (input) input.value = '';
      this.render();
      this.attachEvents();
      document.getElementById('assistantWindow').classList.add('open');
      this.scrollToBottom();

      // Generate response after small natural delay
      setTimeout(() => {
        const response = this.generateResponse(text);
        this.messages.push(response);
        this.render();
        this.attachEvents();
        document.getElementById('assistantWindow').classList.add('open');
        this.scrollToBottom();
      }, 400);
    };

    if (sendBtn) sendBtn.onclick = () => handleSend();
    if (input) {
      input.onkeydown = (e) => {
        if (e.key === 'Enter') handleSend();
      };
    }

    const chips = document.querySelectorAll('.prompt-chip');
    chips.forEach(c => {
      c.onclick = () => {
        const prompt = c.getAttribute('data-prompt');
        handleSend(prompt);
      };
    });

    const actionBtns = document.querySelectorAll('[data-action]');
    actionBtns.forEach(b => {
      b.onclick = () => {
        const action = b.getAttribute('data-action');
        if (action === 'apply-recommendation') {
          store.applyAiRecommendation();
          toast.show("✓ Applied AI recommendation: 390 meals scheduled for tomorrow!", "success");
        } else if (action === 'open-matches') {
          window.location.hash = '#matches';
        } else if (action === 'open-listing') {
          listingModal.open();
        } else if (action === 'open-reports') {
          window.location.hash = '#reports';
        }
      };
    });
  }

  generateResponse(query) {
    const q = query.toLowerCase();

    if (q.includes('reduce tomorrow') || q.includes('tomorrow’s waste') || q.includes('tomorrow')) {
      return {
        sender: 'assistant',
        text: "I recommend preparing **390 meals tomorrow instead of 420**.\n\n**Reason:** Friday afternoon rain (68% probability) and hybrid corporate schedules typically cause an 8–10% drop in cafeteria covers. Adjusting prep avoids ~9 kg of waste and saves ₹2,400.",
        actionBtn: { label: "Apply 390 meals now", type: "apply-recommendation" }
      };
    }

    if (q.includes('ngo') || q.includes('kitchen') || q.includes('nearby')) {
      return {
        sender: 'assistant',
        text: "**Hope Community Kitchen** is your #1 match right now (96% compatibility). They are 1.8 km away, need vegetarian food, and can absorb up to 35 meals before 8:30 PM.",
        actionBtn: { label: "View Best Match", type: "open-matches" }
      };
    }

    if (q.includes('sustainability') || q.includes('score')) {
      return {
        sender: 'assistant',
        text: "Your current sustainability score is **86/100 (Excellent Progress)**.\n\n**Why?** You reduced avoidable prep waste by 24% this month and achieved a 94% prompt rescue rate for all leftover food.",
        actionBtn: { label: "View Score Breakdown", type: "open-reports" }
      };
    }

    if (q.includes('listing') || q.includes('surplus') || q.includes('donate')) {
      return {
        sender: 'assistant',
        text: "You can list surplus in under 60 seconds! Just specify the item name, portion count, and safe-until deadline. Our verified volunteers handle the rest.",
        actionBtn: { label: "+ Create Listing", type: "open-listing" }
      };
    }

    if (q.includes('impact') || q.includes('month') || q.includes('saved')) {
      return {
        sender: 'assistant',
        text: "This month you’ve rescued **1,248 meals**, avoided **386 kg of food waste**, conserved **965 kg of CO₂**, and saved **₹42,600** in ingredient costs!",
        actionBtn: { label: "Download Full Report", type: "open-reports" }
      };
    }

    // Default friendly answer explaining context
    return {
      sender: 'assistant',
      text: "NourishAI connects your daily kitchen numbers with live community demand. I analyze local weather, historical leftover variance, and nearby NGO capacities so you never over-prepare or throw away good food.",
      actionBtn: { label: "View AI Prediction", type: "apply-recommendation" }
    };
  }

  scrollToBottom() {
    const body = document.getElementById('assistantChatBody');
    if (body) body.scrollTop = body.scrollHeight;
  }
}

export const aiAssistant = new AiAssistant();
