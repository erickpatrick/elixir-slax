export default {
  mounted() {
    this.el.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        const form = this.el.closest("form");

        this.el.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
        form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
      }
    });
  }
}

