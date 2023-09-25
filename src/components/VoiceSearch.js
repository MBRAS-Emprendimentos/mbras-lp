import { useConnector } from "react-instantsearch";
import connectVoiceSearch from "instantsearch.js/es/connectors/voice-search/connectVoiceSearch";

const MicrophoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16" // Adjust width
    height="16" // Adjust height
    fill="currentColor" // Color will be the same as text
    aria-hidden="true"
  >
    <path d="M12 1C10.34 1 9 2.34 9 4V11C9 12.66 10.34 14 12 14C13.66 14 15 12.66 15 11V4C15 2.34 13.66 1 12 1zM18 11L20 11L20 13C20 16.87 16.87 20 13 20C13 20 13 21 12 21C11 21 11 20 11 20C7.13 20 4 16.87 4 13L6 13L6 11L4 11L4 13C4 17.07 7.06 20.9 11 21.8V23H13V21.8C16.94 20.9 20 17.07 20 13L18 13L18 11z"></path>
  </svg>
);

export function useVoiceSearch(props) {
  return useConnector(connectVoiceSearch, props);
}

export function VoiceSearch(props) {
  const { isListening, toggleListening, voiceListeningState } =
    useVoiceSearch(props);

  return (
    <>
      <div>
        <button
          onClick={toggleListening}
          className={`btn ${isListening ? "btn-listening" : ""}`}
        >
          <MicrophoneIcon />
          {isListening ? " Parar Busca" : " Busca por Voz"}
        </button>
        {isListening && <p>Escutanto: {voiceListeningState.transcript}</p>}
      </div>
    </>
  );
}
