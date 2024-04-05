import { useState } from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="relative z-40 dark:bg-gray-900 pt-10">
        <div className="py-16 flex flex-col justify-center items-center">
          <a href="#">
            <svg
              className="dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={86}
              height={58}
              viewBox="0 0 86 58"
              fill="none"
            >
              <path
                d="M42.4701 4.49449H47.7911V0H42.4701V4.49449Z"
                fill="#E2E2E2"
              />
              <path
                d="M47.7914 4.49449H53.1124V0H47.7914V4.49449Z"
                fill="#FF3565"
              />
              <path
                d="M42.4701 8.98888H47.7911V4.49438H42.4701V8.98888Z"
                fill="#FF3565"
              />
              <path
                d="M47.7914 8.98888H53.1124V4.49438H47.7914V8.98888Z"
                fill="#E2E2E2"
              />
              <path
                d="M75.0956 23.7122L86.0001 8.98898H73.2641L65.5874 20.8944V0H55.0228V39.1479H65.5874V32.7501L67.6415 29.9918L72.5134 39.1479H85.485L75.0956 23.7122Z"
                fill="currentColor"
              />
              <path
                d="M42.5478 28.2899C42.5421 28.2956 42.5356 28.3021 42.5307 28.3086C42.4859 30.6529 40.5794 32.5423 38.2237 32.5423C35.8403 32.5423 33.9085 30.6105 33.9085 28.2271V0H23.4141V29.1628C23.4141 36.1931 29.8909 39.143 34.7815 39.143C39.7708 39.143 41.1133 37.9766 42.5478 36.7026V39.1479H53.1124V10.7993H42.5478V28.2899Z"
                fill="#FF3565"
              />
              <path
                d="M42.4704 28.8132C42.1827 30.9153 40.4058 32.5423 38.2237 32.5423C35.8403 32.5423 33.9085 30.6105 33.9085 28.2271V0H23.4141V29.1628C23.4141 36.1931 29.8909 39.143 34.7815 39.143C39.6811 39.143 41.0644 38.0173 42.4704 36.7702V28.8132Z"
                fill="currentColor"
              />
              <path
                d="M42.5479 39.1479H53.1124V38.0271H42.5479V39.1479Z"
                fill="#FF3565"
              />
              <path
                d="M42.4701 39.1479H53.1121V10.7993H42.4701V39.1479Z"
                fill="#FF3565"
              />
              <path
                d="M0 0V9.76985H10.5059V39.1479H21.6851V9.78371H23.4139V10.3298H33.9084V0H0Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.6109 49.089C16.6109 49.6367 16.1675 50.0801 15.6198 50.0801C15.085 50.0801 14.6416 49.6367 14.6416 49.089C14.6416 48.5412 15.085 48.1108 15.6198 48.1108C16.1675 48.1108 16.6109 48.5412 16.6109 49.089ZM4.73414 49.9888V57.0574H2.86918V49.9888H0.32605V48.3586H7.26423V49.9888H4.73414ZM11.4745 56.2489C10.9789 56.8749 10.3007 57.2139 9.53129 57.2139C7.95324 57.2139 6.74037 56.0141 6.74037 53.9014C6.74037 51.8538 7.92716 50.6018 9.53129 50.6018C10.2747 50.6018 10.9659 50.9148 11.4745 51.5669V50.7583H13.1438V57.0574H11.4745V56.2489ZM10.0532 55.7402C9.10112 55.7402 8.44903 54.9969 8.44903 53.9013C8.44903 52.8189 9.10112 52.0755 10.0532 52.0755C10.6009 52.0755 11.2008 52.3885 11.4747 52.8058V55.0229C11.2008 55.4403 10.6009 55.7402 10.0532 55.7402ZM16.4546 57.0574V50.7583H14.7983V57.0574H16.4546ZM21.265 56.8096C21.0172 57.0314 20.5608 57.2139 19.8826 57.2139C18.7219 57.2139 18.1089 56.614 18.1089 55.4794V48.3586H19.7652V55.036C19.7652 55.4403 19.9739 55.7402 20.3391 55.7402C20.5869 55.7402 20.8216 55.6489 20.9129 55.5446L21.265 56.8096ZM24.8752 57.0574L26.2055 52.7667L27.5357 57.0574H29.3094L31.2265 50.7583H29.492L28.3182 54.9969L26.9358 50.7583H25.4621L24.0797 54.9969L22.9059 50.7583H21.1844L23.1016 57.0574H24.8752ZM33.8718 49.089C33.8718 49.6367 33.4284 50.0801 32.8807 50.0801C32.346 50.0801 31.9025 49.6367 31.9025 49.089C31.9025 48.5412 32.346 48.1108 32.8807 48.1108C33.4284 48.1108 33.8718 48.5412 33.8718 49.089ZM33.7155 57.0574V50.7583H32.0592V57.0574H33.7155ZM37.0257 52.8059V57.0574H35.3694V50.7583H37.0257V51.5669C37.43 51.0974 38.2125 50.6018 39.2298 50.6018C40.6252 50.6018 41.2904 51.3843 41.2904 52.6102V57.0574H39.621V53.2493C39.621 52.3755 39.1646 52.0755 38.4603 52.0755C37.8082 52.0755 37.3126 52.4407 37.0257 52.8059ZM45.3183 57.2139C46.2718 57.2139 47.0035 56.501 47.0035 55.5248C47.0035 54.5047 46.2718 53.8014 45.3183 53.8014C44.3648 53.8014 43.6331 54.5047 43.6331 55.5248C43.6331 56.501 44.3648 57.2139 45.3183 57.2139ZM45.3183 55.7402C44.9244 55.7402 44.688 55.4403 44.688 55.036C44.688 54.6469 44.9244 54.3969 45.3183 54.3969C45.7122 54.3969 45.9486 54.6469 45.9486 55.036C45.9486 55.4403 45.7122 55.7402 45.3183 55.7402ZM51.113 57.0574V50.7583H49.4567V57.0574H51.113ZM56.1284 57.0574V49.9888H54.2634V49.3764H57.2453V49.9888H55.3804V57.0574H56.1284ZM62.4006 57.0574V49.9888H60.5357V49.3764H63.5176V49.9888H61.6527V57.0574H62.4006Z"
                fill="#FF3565"
              />
            </svg>
          </a>
          <p className="mt-8 text-xs text-gray-600 dark:text-gray-300 text-center">
            © 2023 - created by sinan_m_h_d
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
