export function openModal() {
  const modalElement = document.getElementById(
    "my_modal_5"
  ) as HTMLDialogElement | null;
  if (modalElement) {
    modalElement.showModal();
  }
}

export function closeModal() {
  const modalElement = document.getElementById(
    "my_modal_5"
  ) as HTMLDialogElement | null;
  if (modalElement) {
    modalElement.close();
  }
}
