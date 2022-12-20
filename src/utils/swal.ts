import Swal, { SweetAlertOptions } from 'sweetalert2'

function closeSwal () {
  Swal.close()
}

export interface IBasic extends SweetAlertOptions {
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
  title: string;
  text?: string;
  force?: boolean;
  content?: string
}

interface IClose extends IBasic {
  close: Function;
}

interface IConfirm extends IBasic {
  confirm: any;
  negate?: Function;
}

const anySwalOpen = () => {
  const classes = document.body.classList
  return classes.contains('swal2-shown')
}

const basic = ({ icon, title, text, force, confirmButtonText, didClose }: IBasic) => {
  if (anySwalOpen() && !force) return

  Swal.fire({
    icon,
    title,
    text,
    didClose,
    confirmButtonText: confirmButtonText || 'OK',
    customClass: {
      confirmButton: 'btn btn-success w-100',
      cancelButton: 'btn btn-danger'
    }
  })
}


const confirmSwal = ({ confirm, force, confirmButtonText = 'OK', ...rest }: IConfirm) => {
  if (anySwalOpen() && !force) return

  Swal.fire({
    ...rest,
    confirmButtonText
  }).then((result) => {
    if (result.isConfirmed) {
      confirm()
    }
  })
}




const confirmNegate = ({ confirm, negate, force, allowOutsideClick = true, confirmButtonText = 'OK', ...rest }: IConfirm) => {
  if (anySwalOpen() && !force) return

  Swal.fire({
    ...rest,
    allowOutsideClick,
    showCancelButton: true,
    confirmButtonText: confirmButtonText,
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      confirm()
    } else if (negate) {
      negate()
    }
  })
}


const swal = {
  basic,
  confirmNegate,
  confirm: confirmSwal,
  closeSwal
}

export default swal
