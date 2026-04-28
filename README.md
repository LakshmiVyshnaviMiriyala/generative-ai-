# RecoMail AI — Personalized Retail Outreach Generator

Generate personalized product recommendation emails for retail customers using LLMs.

## Quick Start

### 1. Backend Setup

```bash
cd backend

# Create and activate virtual environment
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env and add your API key (OpenAI or Gemini)

# Start the API server
uvicorn app.main:app --reload --port 8000
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Configuration

Edit `backend/.env`:

```env
LLM_PROVIDER=openai          # or gemini
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=AIza...
```

---

## Usage

1. **Upload** — drag and drop `sample_customers.csv` (or your own CSV)
2. **Generate** — choose your LLM provider and click "Generate Emails"
3. **Preview** — review and edit each email in the card layout
4. **Download** — export all emails as CSV

---

## CSV Format

| Column | Description |
|---|---|
| customer_id | Unique identifier |
| name | Customer full name |
| email | Email address |
| purchase_history | Comma-separated product names |
| segment | `budget`, `mid`, or `premium` |

---

## API Endpoints

| Method | Path | Description |
|---|---|---|
| POST | `/upload` | Upload and validate CSV |
| POST | `/generate` | Generate emails via LLM |
| GET | `/download` | Download results as CSV |

Interactive docs: http://localhost:8000/docs
