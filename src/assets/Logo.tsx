const Logo = () => {
  return (
    <div
      onClick={() => {
        window.location.pathname = "/";
      }}
    >
      <svg
        width="92"
        height="33"
        viewBox="0 0 92 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.3 27V22.04C41.3 21.4267 41.32 20.8 41.36 20.16C41.4133 19.5067 41.4667 18.96 41.52 18.52C41.5733 18.08 41.6067 17.8 41.62 17.68H41.54L39 27H35.54L32.98 17.7H32.9C32.9133 17.82 32.9467 18.1 33 18.54C33.0667 18.9667 33.1267 19.5067 33.18 20.16C33.2333 20.8 33.26 21.4267 33.26 22.04V27H29.2V13.24H35.44L37.52 21.18H37.6L39.66 13.24H45.68V27H41.3ZM53.5467 16.2C55.4001 16.2 56.8534 16.6733 57.9067 17.62C58.9734 18.5533 59.5067 19.92 59.5067 21.72C59.5067 23.52 58.9734 24.8933 57.9067 25.84C56.8534 26.7733 55.4001 27.24 53.5467 27.24C51.6934 27.24 50.2401 26.7733 49.1867 25.84C48.1334 24.9067 47.6067 23.5333 47.6067 21.72C47.6067 19.9067 48.1334 18.5333 49.1867 17.6C50.2401 16.6667 51.6934 16.2 53.5467 16.2ZM53.5467 18.9C52.2401 18.9 51.5867 19.6533 51.5867 21.16V22.3C51.5867 23.7933 52.2401 24.54 53.5467 24.54C54.8667 24.54 55.5267 23.7933 55.5267 22.3V21.16C55.5267 19.6533 54.8667 18.9 53.5467 18.9ZM63.543 27L59.543 16.44H63.823L65.763 23.02H65.903L67.843 16.44H71.763L67.723 27H63.543ZM73.1095 15.2V12.5H77.0895V15.2H73.1095ZM73.1095 27V16.44H77.0895V27H73.1095ZM85.0897 16.2C87.023 16.2 88.4964 16.6533 89.5097 17.56C90.5364 18.4667 91.0497 19.8533 91.0497 21.72V22.4H83.1297C83.1297 23.16 83.2964 23.7333 83.6297 24.12C83.9764 24.5067 84.5164 24.7 85.2497 24.7C85.9164 24.7 86.403 24.56 86.7097 24.28C87.0297 24 87.1897 23.6267 87.1897 23.16H91.0497C91.0497 24.44 90.563 25.44 89.5897 26.16C88.6164 26.88 87.1964 27.24 85.3297 27.24C83.3697 27.24 81.8497 26.7867 80.7697 25.88C79.6897 24.96 79.1497 23.5733 79.1497 21.72C79.1497 19.9067 79.6764 18.5333 80.7297 17.6C81.783 16.6667 83.2364 16.2 85.0897 16.2ZM85.2497 18.74C83.9964 18.74 83.2964 19.3333 83.1497 20.52H87.0297C87.0297 19.9733 86.8697 19.54 86.5497 19.22C86.243 18.9 85.8097 18.74 85.2497 18.74Z"
          fill="black"
        />
        <path
          d="M12.6 6C14.58 6 16.36 6.3 17.94 6.9C19.52 7.5 20.77 8.39 21.69 9.57C22.63 10.73 23.1 12.15 23.1 13.83H16.77C16.77 12.97 16.39 12.28 15.63 11.76C14.87 11.22 13.95 10.95 12.87 10.95C11.31 10.95 10.13 11.37 9.33 12.21C8.53 13.03 8.13 14.2 8.13 15.72V17.64C8.13 19.16 8.53 20.34 9.33 21.18C10.13 22 11.31 22.41 12.87 22.41C13.95 22.41 14.87 22.16 15.63 21.66C16.39 21.14 16.77 20.48 16.77 19.68H12.09V15.48H23.1V27H19.68L19.02 24.96C17.14 26.56 14.68 27.36 11.64 27.36C8.22 27.36 5.65 26.47 3.93 24.69C2.21 22.89 1.35 20.22 1.35 16.68C1.35 13.18 2.32 10.53 4.26 8.73C6.22 6.91 9 6 12.6 6Z"
          fill="#6886C5"
        />
        <path
          d="M17.94 6.9L17.7625 7.36743H17.7625L17.94 6.9ZM21.69 9.57L21.2956 9.87749L21.3015 9.88479L21.69 9.57ZM23.1 13.83V14.33H23.6V13.83H23.1ZM16.77 13.83H16.27V14.33H16.77V13.83ZM15.63 11.76L15.3404 12.1677L15.3477 12.1727L15.63 11.76ZM9.33 12.21L9.68792 12.5592L9.69207 12.5548L9.33 12.21ZM9.33 21.18L8.96791 21.5249L8.97211 21.5292L9.33 21.18ZM15.63 21.66L15.9049 22.0778L15.9123 22.0727L15.63 21.66ZM16.77 19.68H17.27V19.18H16.77V19.68ZM12.09 19.68H11.59V20.18H12.09V19.68ZM12.09 15.48V14.98H11.59V15.48H12.09ZM23.1 15.48H23.6V14.98H23.1V15.48ZM23.1 27V27.5H23.6V27H23.1ZM19.68 27L19.2043 27.1539L19.3162 27.5H19.68V27ZM19.02 24.96L19.4957 24.8061L19.2655 24.0945L18.6959 24.5792L19.02 24.96ZM3.93 24.69L3.5685 25.0354L3.57044 25.0374L3.93 24.69ZM4.26 8.73L4.60008 9.09653L4.60023 9.0964L4.26 8.73ZM12.6 6.5C14.5296 6.5 16.248 6.79231 17.7625 7.36743L18.1175 6.43257C16.472 5.80769 14.6304 5.5 12.6 5.5V6.5ZM17.7625 7.36743C19.2683 7.93925 20.439 8.77861 21.2957 9.87743L22.0843 9.26257C21.101 8.00139 19.7717 7.06075 18.1175 6.43257L17.7625 7.36743ZM21.3015 9.88479C22.1604 10.9446 22.6 12.2494 22.6 13.83H23.6C23.6 12.0506 23.0996 10.5154 22.0785 9.25521L21.3015 9.88479ZM23.1 13.33H16.77V14.33H23.1V13.33ZM17.27 13.83C17.27 12.7916 16.7971 11.9527 15.9123 11.3473L15.3477 12.1727C15.9829 12.6073 16.27 13.1484 16.27 13.83H17.27ZM15.9196 11.3524C15.0621 10.7432 14.0368 10.45 12.87 10.45V11.45C13.8632 11.45 14.6779 11.6968 15.3404 12.1676L15.9196 11.3524ZM12.87 10.45C11.2221 10.45 9.89146 10.8955 8.96793 11.8652L9.69207 12.5548C10.3685 11.8445 11.3979 11.45 12.87 11.45V10.45ZM8.97211 11.8608C8.05433 12.8016 7.63 14.1135 7.63 15.72H8.63C8.63 14.2865 9.00568 13.2584 9.68789 12.5592L8.97211 11.8608ZM7.63 15.72V17.64H8.63V15.72H7.63ZM7.63 17.64C7.63 19.2473 8.0546 20.5658 8.96793 21.5248L9.69207 20.8352C9.0054 20.1142 8.63 19.0727 8.63 17.64H7.63ZM8.97211 21.5292C9.89626 22.4764 11.2254 22.91 12.87 22.91V21.91C11.3946 21.91 10.3637 21.5236 9.68789 20.8308L8.97211 21.5292ZM12.87 22.91C14.0291 22.91 15.049 22.6408 15.9048 22.0777L15.3552 21.2423C14.691 21.6792 13.8709 21.91 12.87 21.91V22.91ZM15.9123 22.0727C16.7847 21.4758 17.27 20.672 17.27 19.68H16.27C16.27 20.288 15.9953 20.8042 15.3477 21.2473L15.9123 22.0727ZM16.77 19.18H12.09V20.18H16.77V19.18ZM12.59 19.68V15.48H11.59V19.68H12.59ZM12.09 15.98H23.1V14.98H12.09V15.98ZM22.6 15.48V27H23.6V15.48H22.6ZM23.1 26.5H19.68V27.5H23.1V26.5ZM20.1557 26.8461L19.4957 24.8061L18.5443 25.1139L19.2043 27.1539L20.1557 26.8461ZM18.6959 24.5792C16.9259 26.0856 14.5897 26.86 11.64 26.86V27.86C14.7703 27.86 17.3541 27.0344 19.3441 25.3408L18.6959 24.5792ZM11.64 26.86C8.30252 26.86 5.88394 25.9926 4.28956 24.3426L3.57044 25.0374C5.41606 26.9474 8.13748 27.86 11.64 27.86V26.86ZM4.2915 24.3446C2.69196 22.6706 1.85 20.1457 1.85 16.68H0.85C0.85 20.2943 1.72804 23.1094 3.56851 25.0354L4.2915 24.3446ZM1.85 16.68C1.85 13.2721 2.79206 10.7741 4.60008 9.09653L3.91992 8.36347C1.84794 10.2859 0.85 13.0879 0.85 16.68H1.85ZM4.60023 9.0964C6.43964 7.38837 9.08175 6.5 12.6 6.5V5.5C8.91825 5.5 6.00036 6.43163 3.91977 8.3636L4.60023 9.0964Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default Logo;
