import './GenerateSection.css'

export default function GenerateSection({ disabled, provider, onProviderChange, onGenerate, generating }) {
  return (
    <div className="gen-section">
      <div className="provider-select">
        <label htmlFor="provider-select">LLM Provider</label>
        <select
          id="provider-select"
          value={provider}
          onChange={(e) => onProviderChange(e.target.value)}
          disabled={generating}
        >
          <option value="openai">OpenAI (GPT-4o mini)</option>
          <option value="gemini">Google Gemini (1.5 Flash)</option>
          <option value="groq">Groq (LLaMA 3)</option>
        </select>
      </div>
      <button
        className="btn btn-primary gen-btn"
        onClick={onGenerate}
        disabled={disabled}
        aria-busy={generating}
      >
        {generating ? (
          <><span className="spinner" aria-hidden="true" /> Generating…</>
        ) : (
          '✨ Generate Emails'
        )}
      </button>
    </div>
  )
}
