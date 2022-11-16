export default `
    <div class="modal-content">
      <section class="chat-data-input-section">
        <div class="title-input-section">
          {{{ chatTitleInput }}}
        </div>
      </section>
      
      <section class="create-button-section">
        {{{ createChatButton }}}
      </section>

      {{#if apiResponseSuccess}}
        <span class="api-success"> {{apiResponseSuccess}} </span>
      {{/if}}
      {{#if apiResponseError}}
        <span class="api-error"> {{apiResponseError}} </span>
      {{/if}}

      {{{ closeButton }}}
    </div>
`;