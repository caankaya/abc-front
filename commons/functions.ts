export function openModal(modal: string) {
  const modalElement = document.getElementById(
    `${modal}`
  ) as HTMLDialogElement | null;
  if (modalElement) {
    modalElement.showModal();
  }
}

export function closeModal(modal: string) {
  const modalElement = document.getElementById(
    `${modal}`
  ) as HTMLDialogElement | null;
  if (modalElement) {
    modalElement.close();
  }
}
