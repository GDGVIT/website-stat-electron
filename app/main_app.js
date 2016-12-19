import React from 'react';
import Card from './card.js';
import Screenshot from './screenshot.js';
import LoadTime from './loadtime';
import Requests from './requests';
import Rulelist from './rule_list';
import PageGrade from './page_grade';
import Size from './size';
import Preloader from './preloader';
import CircularProgressbar from 'react-circular-progressbar'

class MainApp extends React.Component {
    constructor(){
        super();
        this.state={
            percent:0,
            inurl:'',
            data:[],
            dataurl:'http://',
            datatitle:'Title',
            datagrade:0,
            dataresources:0,
            datahosts:0,
            databytes:0,
            datastaticresources:0,
            datahtmlbytes:0,
            datacssbytes:0,
            dataimagebytes:0,
            datajsbytes:0,
            datajs:0,
            datacss:0,
            loadervisibility:'hidden',
            screenshot:'_9j_4AAQSkZJRgABAQAAAQABAAD_2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj_2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj_wAARCADwAUADASIAAhEBAxEB_8QAHAABAAEFAQEAAAAAAAAAAAAAAAYBAgMEBQcI_8QAShAAAQMCAwIICQwBAwIGAwAAAQIDBAARBRIhBjETFCJBUVRhcRYyM3KBkZKT0QcVFyM0UlWUobHB0lMkQnNi8CVDY4Lh8YOEov_EABsBAQACAwEBAAAAAAAAAAAAAAABAgMFBgQH_8QAOBEAAgECAgYHBwQCAwEAAAAAAAECAxEEURITFSExkQUUQWFxodEWUlNUgdLwkrHB4QYiMnLC8f_aAAwDAQACEQMRAD8A-qaUpQClKUApSlAKUpQClKUApSlAKUoaAXHTSvFPk_xybNkbKJh4rjkzFZZW7iTM1K-LGOkKC1oK0gXCy0BwZO_XTWuzs5toqZ8orqVYvHewvEnn4ESGl5BUy5H_APMyg5hwln9_MhHTQHqVK8UVtriw-StxwMY5x8OKQMT4JPB_aim-e-7LpuqTDF8Q8EflGkcce4eDInJirvqyEMJUkJ7iSRQHotKhOwWJTJuO7QNTJTrzbKYRaSs3CM8ZKlW71Emuf8qe1U3ZbGMCfiNSpaFsTSYbCSQ6pLaCkrsCQlPKUTzC9gTYUB6NcdNK8kxuTIheB7c_aPFpcfElSZMmVhmc8MS0FoDaW0qUGhfkgc2pJJJrLstjeLyZeyKnJ8p3Dp0yfxZx-wckxEsqUyp0ADXn5jYAnW9AerXFK8nwabi0OdEax3FMZhY46XQ-1KbSuDN5CzljLSMqCLBSRcKskgg6msUHbHE5OxuxYMXHGZUl_C0Pz3WUpbeC1thd1ZjcLBPNrfmoD12leHr2vxyBsptU3iU5wrk_OT2DzQQFNqZecSqOT95ISFp6UlQ_213dv9s1YTtVFDOLMRYmDNtSsQjLdQlUpLy8mQJJucjYW5pz5emgPU6VRJCkgggg8456rQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUqK_KTjE3A9nON4a4lt_h0IupAULG99DWWjSlWqKnHizFWqxo03UlwRKqV4H9I-03XGPy6afSPtN1xj8umttsDE5rm_Q1O38Nk-S9T3yleB_SPtN1xj8umn0j7TdcY_LppsDE5rm_Qbfw2T5L1PfKV4Oz8om0igc0xn8umsn0hbR9bZ_LprQYuosJWlQqcY5cz0Q6WozjpJP8APqe6UNeF_SFtH1tn8umn0hbR9bZ_Lprzdep5MttOjk_z6nprOxmGx8MwWHHdlsnCCoxZCHBwqQpKkqBNrEEK1FuYHmFXo2LwZvB8Nw5mPwSMPWw4w83lDoU0QUkqtqTayr7wo9NeX_SFtH1tn8umtJ75Stp0uqSJjFgeroqHj6a7GbboilLperKjh9zSvv8AFLsvmeunY_DDskrZzNI-bySb5xwmrvCb7fe7N1YcT2Iw7EJc5xUrEWIuIKCp0NiRkYlHKEkrFrjMkAKykZgNb15N9Je1HXGPy6KfSXtR1xj8uio2jSyZ0HsrjPejzfoetyNj2zjM3EYOMYthzkzg-GairaDZ4NAQnRTaiNABoa60zB40vGcOxN1TokwEupaCVWSQ4EhVxz-KLV4d9Je1HXGPy6Kor5TNqAknjrG7qyKldIUnusx7LYz3o836Hr2GbF4Zhk2G_EXJQiE9IejMcIODZ4YALQkW0Re5Cb6Em2lgKxNjMLiyorzRkZIsmTKZYKwW0F9JDiQm3icpRA5io82leC_S3th1-P8AlUfCn0t7Ydfj_lUfCui2RXzX59DW7JrZr8-h7lD2Ew-M7DBmYm9Dgkqhw3pOdmMcpSCkWzHKlRCcxNubmrfGy2HjAMIwgKf4rha4y2DnGYlgpKMxtrqkX6a-fvpb2w6_H_Ko-FPpb2w6_H_Ko-FNkVs1-fQbJrZr8-h7niuwWC4pspI2fmofXBekOS83CWcbcW6p0qSq2llKUB2G2tb7WyuEj51MiOmUrEnVOyFSAlZOZARlBtokJSABzV8_J-VrbAqtx-P-VR8Kv-lja7r0f8qitfiqTws9CfG19xgq4GpSejJo-j8HgN4XhUOAy6663FZQyhbysy1BIsCo85sN9blfMn0sbXdej_lUU-lja7r0f8qivNromPq0z6bpXzJ9LG13Xo_5VFZWflW2tVmzTo5__VR8KvTkqklFHlxklg6Lr1OCy73Y-lqV83fSntX11j8sj4U-lPavrrH5ZHwr09XmaP2iwuUuS9T6RpXzd9Ke1fXWPyyPhT6U9q-usflkfCnV5j2iwuUuS9T6RpUY-TbFpeObHwp-IuJckulwKUlISDZagNB2AVJ6wtWdjdUqqqwjUjwavzFKUqDIKUpQClKUApSlAK5O00SPMw3gpbLbzedJyrTmF9a61DWDE0pVqUqcJaLa4rsJVr_7K6PP_mDCPwyH7kU-YMI_DIfuRU_07Kadlc_sLG_OS8_uMulQ-EuS9CAfMGEfhkP3Ip8wYR-GQ_cip_p2U07KbCxvzkvP7hpUPhLkvQ-cvlajt4bieHIw5pMZC2FKUGU5Qo5t5tUE41K_zPes19jkJO8JNUyI-6n1Ct5hcM6NGNOpLTa7Xxf7m-wnTeFw9GNJ4WLt27vtPjnjUr_M96zTjUr_ADPes19jZEfdT6hTIj7qfUK9GhHI9HtFhPlI-X2nxzxqV_me9ZrswwVxWluJKlqTckjU6mvq3Ij7qfUKrkQP9qfVXtwVelhpuUqaldd3ozn_APIsUulsPGjhI6iSd9KPFqzVt2jnfj2HyvwafufpTg0_c_SvqfKj7qf0plR91P6Vs9rYf5ePl6HH7Gx3zk_P7j5Y4NP3P0q5ppJdQC2CCoA6V9S5UfdT-lMqOhP6VD6Vw7Vurry9Auh8cnfrk_P7jyDwcwa5_wDCYXuRTwdwb8Jhe5FewcnspyeyuA2Livmpef3HV9Ynm-Z4_wCDuDfhML3Ip4O4N-EwvcivYOT2U5PZTYuK-al5_cOsTzfM8VxLZ_CG4i1N4XDSoEahkX31xvmfD-oR_dCvoSwPMKpZPQKwVf8AHcRUd3iXyf3GwwnSioQ0Zw0nfi3_AEz58-Z8P6hH90KfM-H9Qj-6FfQdk9CaWT0JrF7M1_mXyf3Hq23T-Cuf9Hz58z4f1CP7oVxNo4EaOY_ARm282a-RFr7q-nrJ6E0yoPMmvd0d0JVwWJjXlXckr7rPtTWbPHj-kaeMoSoapK9u_g75HyRwKf8AGPZpwKf8Y9mvrbKj7qfUKZUfdT6hXUa_uOc6hTyXJHyTwKf8Y9mnAp_xj2a-tsqPup9QplR91PqFNf3DqFPJckRH5IkhOwWHACwzO6f_AJFVMaoAALAWFVrC3d3PZCKjFRXYKUpUFhSlKAUpSgFKUoBVrmiVd1XVa54iu40BRsXQknfYVdYdFUb8mnuFcSdg8l9x8s4q7FQ66XLNiyhdATa-bXxbjTnPPYgDuWFLCo8xgb6JudWOTXCHOFS0XDYJzE5SL6jcNejvrE1gOIpWtRx6QPrlLQkAkZTcgEZu7dzDp1oCTWHRSw6KjreByGIj4dxyWtTjRQpxxZsk3BzAZtNxGhGh31ro2akoUEIx-WlaGwgW3hPMfG7O7TdegJVYdFLDoriScEefmJd-c5IYSG7M3JF0EG9731tr08967lAY3tGlEaG1D5VI5rH-KSPIq7qHyyPNP8UBfYdFLDorWxSMJkF1gucGFi2a1xvG8c45iOiuMdn5RUSjGZLSLWQ2yClCdw0Gbda4A7ec60BIrClh0VFF4JPStJb2kfKkOpzhZ0GiQE2Cuc20O8K6da24eByGi9xrGH5SnmnGhn0CQoJGgva4Kb-k0BILDopYVGE7MzEIShjG5DLaQSlDbeVKSbbhm0TpoO06mtiZgU2TMluHGZSY8jTgACAgZbWSQQRrr_3egO_YVWw6K0sIhuwYpafmPS1lal8I7vsTe3cK3aAxjyxHNlv-tGeU2CdTr-9B9oPm_wAmkfyQ7z-9AX2HRSw6K4-MYKvEJQfZnvxFhot_VfevorvAKx_7-wVoSdnZnB_V7QzmlWN1qVm1011Om47umgJPYUsKj7GFyGo7zKMbeWZDXJW4sqUFCxzJObdqb2tvFiKsgYLPiusSJeOvuhkJK0EWSoAG9yTrvvc9A0oCR2FLDoqNsYLJUhtbO0Epxo5FJVmzBQBB35tQbH2uiwqx3ZqUqKqO1jctLSswUCVK0NwBfNcDX02G6gJPYdFFAWNUaTkbSm5OUAXNVV4poC1k3bSTvsKvqxnySPNFX0ApSlAKUpQClKUApSlAKtc8RXcauq1zxFdxoA35NPcKiuM4fs6MWfl4nLAkryIU2t0EJ3ZTl5t2_vqVN-TT3ConjD2yysWktYi02ZhsHlKbVrZOYC-46WNu7noBCh7OxWlpjYikJcaW2s8OlRWlRubqOuhO-_rqxOE7NvvFPHkLdUQ2Eh9IIUbCwAG82t3GwsNKwNP7JBtCUxitKRlC1NLN1aDUn_d4u_XdV65ezRHGkMOobiyEOF9tJHKIKrnW5F0C_SQN9AXR8M2aMpcVqYXnnSWlJLvCZiUlNtx15B7rW3aVbLwjZhlhxDs8NhAcDlpAzqAWVKSec2J7_wBaq3iOyrSw42ypkqULOJYcRrcq0PYc3qNdCBG2fxp2UqPFQ44D9asoUk3Vrv8AQDpuv20B1m8Ugca4miUyHxlHB3sdQbDv03d3TW9Wh8zYfxzjfFW-MZgrPrvG7494B31v0BjkeRV3UPlkeaf4pI8iruofLI80_wAUBrY2xFlYXIYnucHGcTlWrPlsLjnqNpw_ZgSC984tFSHEuAcZTlRkKlBI7L5jbsHQKk-KORmYLrs63FmxnWSLgAEG57rX9FQ8S9kWnX0mOAFNahTarZScmVKea9xzftoBkXh-y0h159WJJu66tSv9SE3UDrbn-Om-wtk4lswpgRTPbIaeU4QXwCpZSEnvABFraA7t2lpn7LpfQrig4ZI5B4I3KeSq47Bnvr0Kq7jGycZiNJEdCUyUXaIYXdSb5NBbcCbdmYdNASNjFsPeWwhqWyVvAltJVYrsSNAd-oNb9RKJi2z7iGZvFy0QptptamiTdRKwBa-4hR9FdGPtThL78dlp9RcfKUtp4JWpVe3N2G_RQHcpSlAYx9oPm_yaR_JDvP70H2g-b_JpH8kO8_vQEc2ki4E7OLuLSlMvpaQi3CFPJzlQt23Sb25hrpWo3hWzEVCWxObCUEk3kJN_F3no5I9Z6a29pn9nG5qfntCDIQ0lwKKFEpTmIBuO29ufQ1glubMRlPMuxkAlRaKUtKNyDawt2kjTnJ6b0BjcwPZth5TTk3K8FA2U-m6bpSALW3WCdNx0vcVnVg2BGMiAiUtIkrBCUPcpZyKOunOlR9FuysD-JbLyl5n45UQAkqVHWMuibAntHB-sVngYns69iqERmrSCG0JXkUBuKQOy3i-kb-YDRi4RspwziUTg4slLYzyAbG1gEnp7ucDorq4S1gcB16XGntngkcG4pTycqQVC1_SAP_kknYGymChICIDSLKCroJSSRrrrr_30Vlj7OYUw0-03DbDbxSVpJJHJsRbo1AOnPrQHSjyGZLeeO6h1FynMhVxcbxWRXimsMOIxCZ4KK0lpvMpeVO65NyfSST6azK8U0Baz5JHmir6sZ8kjzRV9AKUpQClKUApSlAKUpQCrXPEV3Grqtc8RXcaAN-TT3Co_PxdDU99lzCJDoQtKeG4MFKjYEa9Gtr9OlSBvyae4VH8Tm4-3PkNwcPbcjhIDSyoC6rb9_wDHN26Ac8bS8pTZ2fkhorSjVq3JPjEi28a6dA381b0TGg-la_maQ2yULdJWgAqy2A0tqSL7-YdtZI0_HlyGA_hTTbKnUpcVw2qU2N1W57aDt38-mB7E9omGwpWDtOAm6sjviJsb35ye7fbtFAYZmNIRGbkLwJ51pDt20pazLFkpKVAW08cj0VfF2kKWAUYJNSrIVqS03poCo20F9xA6Tes2GYpjshcQycIS2w9dS1cJYtpym10k3uSBpzZuytRrGNpkqSqTgYCFuAZUOBRCba7j2E69g7aA6iccdXLYYRhsqziWlqcXYJQF300vcjn_AHrtjdUfbn427CeWvDOAfQ6AhAWlZWgp1O-1wrt3Curhapa4aTiCEIk5lBQQNLBRykaneLGgM8jyKu6h8sjzT_FJHkVd1D5ZHmn-KAx4i-I0J54tLeCEklCRcqqKLx1EhyTHlbOvrQXMjYLNw7fRRJIsO_oNSvEFyG4jiobaXX9MqVGw3jf3C59FRteJ7T8YSpOCo4IIAUjhU6rKhchV9wHZQGWTjSWG4bnzK_mdCwoFsXbCdN4HYO4ViG0X-nXnwGbZtKlcGGhoAbgWPOdD6Ceas7uJ48qUpEbCEKZ4dxsOrcy2QDYKte5vb039dnzntIG1rOCtnRSUt8KMxVplJN7Aakei_ZQGycXaTiIhqwuUlJU2kOloZCpViN3Rc6_9JrnydpGsPbHGcHdQ8F2SEIFvGIRYkC5PMBz3ro4hKxpmSkxYYfRwCDkuEpLmaytTqAE6jp_bWViePcZYbVgzfBrKRnK75Tre_Ra2-_76Ab-C4yvE33E8RkR20g2W8MpUQoggC3RY-muxUaYxHaIlCHsIZBUtCS4HeSBpmURfQamwBPRUloDGPtB83-TSP5Id5_eg-0Hzf5NI_kh3n96A5ONYk3EkcG5hzsn6sKzJbChqrd-nrKemtBW0CM4UvAZ3CKKVeRSTyiBcnm0Iv6q6GLTMWjy1CDh6ZMYNBV-EAUpZJGUC_cb1quTtoeIySnDGRJSW0tAOZgq6bqO8bjpv7aA1Wtp47wCUYPLUpTvBEBkEDUJuTbdzHzT0VndxfizsJw4VyHGEPOcG2StokEHcm1kgWO46iwo3P2jL1jhTIbUoAEuDki-pOvN-vZXUw9_EXJ0pEyIhqMlSgy4F3KgDoSO0ftQHOTtOThz8pWFYgC0WxwXBctWfoHZz_wDzWSNtEp-cwynDJgaeUEpdKbBPjXzX3AZfTf19-lABVFeKarVFeKaAtZ8kjzRV9WM-SR5oq-gFKUoBSlKAUpSgFKUoBVrniK7jV1WueIruNAG_Jp7hXBxKPtC5LkqgTITcew4FC0G-4XzHvzHTs7a7zfk09wrgYhg2JycSfeYxl2PGcSkBtKSrLYi9tbc2_wD6je-lAFR9o0Q1pamQnJJcQUqcRZITc5gQBr_t_WrOKbRiK2ET4weAWVZ05gpRUojXKLADKNO2r3sGmCKylWOSELbSpJWbgLuonXldFhe99NLVb8xzC8CcdlF1OdQ3jRQFrgKtYFN93ORQFjcTajNdeIwrBIIs3vVbUHTdfo1tWaXG2iXNWY82E3FKlZRwV1AXFrk8-8f_AHpsYVBdwrjUjEMSVI4TKSt3khAF-kkAa9m4bzrXYvQEXbjbVZll2bh4CQChKEXzG2oJI0F7es9lSZsqKElacqiNRe9j0VdSgMcjyKu6h8sjzT_FJHkVd1D5ZHmn-KAx4imSqC-mCtCJJQeDUsXSFc165EONtAHkrlTYpSFKJQhOlsqgkHS51KTzbvRXXxCOuVEcZbfcYUuw4Rs2UNRe37emuKzg85p9ROOSHnQg5W1aDUEBRF-m3Nbk6C97gVaZ2iATwkmGSLXsN4138nfe17c26x1OGMxtUEHjMvDlKy6BCCBfKd5I6d-nR2g1Rs_iQjtpXj8oODVSgCejQXO7Q77n01hb2ekRmyJG0Mrgl3ASVFIub3sc1z_u5ydb8woDcbj7QJiIC5cVUkqzKOWyQODSLDk7s4UenUa81aYj7WPBZXJhM_WaJB1y5rjUJ3W03X37r6bkjDJ8tDC42NKYPABv6pJUhR15Y5W-x9YFPmCTwK0DGJmZRbu4SSoBKlEga6XCrXGugoDXETaktoCp8MKUk5ylPinKQMvJ6bE3vz1KBWOM2pqO0244p1aEBKlq3qIG_wBNZKAxj7QfN_k0j-SHef3oPtB83-TSP5Id5_egORjreOFZXhD8ZKAkfVuJBKiAq9iek5P1rTVD2nWWr4jDQBdSsret76C9tRa19Onstu45BfeXxhGLuwWUoAKRYJvfxibjp3btBe-6uexs5iSVBC8cfXFSyEIACkm4NwTZWvN6rdNwKribVLjkHEIIcUbchBSAL8xsf_roOtbMGLtAHGVTp0ZSQbrS0iwIykW3dJB9HfWOFg8liWw87j0h7I4Q4gmwcPLITvNrBX6d1sTuzE15zM9j81YylNrWtdKk6WItvB6dKA7OCN4i1Ey4s-y9IuDmaTYDQXHrvXQqPT8JmLlOujHX46Hl2Q3uCboyhKdRz8r_ALvXQweFIgpeEue7MW4vOkuC2QWAsB0UB0aorxTRKgpIUkggi4I56K8U0Baz5JHmir6sZ8kjzRV9AKUpQClKUApSlAKUpQCrXPEV3Grqtc8RXcaAN-TT3ConjOG7PysRfM2e41JedCFID-TlZMoAHRY91z01LG_Jp7hUXxAbLvY6W5rbSsRLqWTdK9VqTom-43Fge8A76AxJwjZ1RSymchVxlCeHQbkk25t91buwaaVjOB7PJWUHEVcKlSkq_wBSnMTmUog6bwSru3ixF6uVJ2VaCDwQvmDqbNOEkjUHpOiQe4DmqjkvZR98uuMguFXjFlwXUCq47SDn07D0UBmmYHgbzKIDk1aG2UrcLaXx4oKcxVpoAbdGpNasXBdmVBwN4kVuLWs51SRm08bL2aHsNz01vYbJ2exKXKYjN5nJBWHMwUA4FAEkHoO_m3E1teCWCDIEQUISkEZUKUAbi2uuumncT00BXBxhGHodfjT2lNvrSgqW8m2YAnKLW11OnRYbgAO0y6280lxlaVtqF0qSbgjpBrlsbOYWzGQwiIktodLqQoklKiCNDfQWNrdFdKJHaiRmo8ZAbZaSEIQNyUjcB2UBWR5FXdQ-WR5p_ikjyKu6h8sjzT_FAYMWaYew6QiY7wUcoOdeYJyjpudPXpUT-Ztnn5KJicZISGzpxhAypNj0XTbN_wD1bdpUqxpyG1hclzE7CGlF3LgnT0a33btajJGyvBuBuElbbIWtVm1JCbFu-8jXlJPrNAUlYPgLiIxVjCkNNxjGTlkpzLSkWOu_de9um-hrbehbPuyXHH5zSlrbCihbydElopvY66oV-vab6MfEtkVrW8htKeDHBhRbXbKMtyB0AhIPaB2VtuTNmX3ksrRmdOQH6ty6D4qbn_aRk7xloDWThezs511lnEnswWoqCHststirW24adg5qkhxvCgL_ADjDt08Mm371ZHwDC46XUsQmm0uBSVhNxcEWPP0VYxs3hDBbLUBlJbSUItfQE3I39OtAbgxKGqU3GTJaU-4CpKEquSLA37rEa1t1oMYRBYlpksxkIfSgIChfcEhI9QFq36Axj7QfN_k0j-SHef3oPtB83-TSP5Id5_egODtFheEYjKyYlL4J0tj6vhkpJSCTex1tv7DbsrRwvDtnU8HOYxAuFtTakuOvAFI0CBqAQDltrv1rc2kewFEpDeMNhb60pKQEKJIuUgC3nEW7a0MuyzUUr4Ex2XXAkkJWnPwZuN3-26x35qAonAtnAtSRiXKz3I4wjRRNrHTp0sd533JNbEPCMAdZcEactYkxFNnLIuotlWYqA33ubX7hWq-5sdEaHDsttJLxWAW16uAAn06Ad4tWyxP2ahSOFjIPDvpKAEIXdaQoXsDzXNz3HooBFhYA7BSlM88EtQebDrwSpHIUAQCLgWKjrWi3guz6ZannMcLiVLStP-oSBybKOZQ33JHRoQBpW3IOysVS23m0hSf9MQUuKKkjMnJ2pFlC27fWo3N2RS240loupUeFSMqlZyApVkd2U9Av23oCXYWuG3HahwX2nEx2kICULBKU2sm9uwVuK8U1yNnE4SWpDuCpQEF0odKb-OnS2vQN1tLV11eKaAtZ8kjzRV9WM-SR5oq-gFKUoBSlKAUpSgFKUoBVrniK7jV1WueIruNAGvJp7hViozCnQ4plsuAg5ikXuNxvWm_P4rIQ2tP1QiuSFEankFOgH_uNcxW1KUFSVQnc6UpUoJWlXjlAQBbfcrG7dY9lwO6IcZJuI7IOouEDnNz-pNVVEjqSUqYaKTqQUDpvXB8JzZZOHSEpQFFedaUlOVCVq0vfQK06eys-JY6YM15lUfhEoSFXSsJIAQpSib9idBQHYbjMNuFxtltCze6koAOpude01lqPM7Tsr4XPHcbKElwBSk3y5kgXHNfP3abzWSBtAZUphpcNxpL2XKsuJPjIUtOg7Enu038wHdpSlAY5HkVd1D5ZHmn-KSPIq7qK8sjuP8UBetCXEKQtIUlQsQRcEVjEZgZrMtjNe_IGt7fAequOMfyQYr7jBUp1pbywhQAShJAURfeeUNK1jtWMoIw-Sr6tLhykEJzXyXO4XA6dLjtsB3UwIifFjMDUHRtO8bubtNXiJHBUQw0Co3Ucg1PbXIRjylx5yjFU07HZcdAWsKCihSknd_1J9R9FYXtpgz40NwglYSoOJtZCsq1HnSL7r9OttaAkdKjkjappttKmorrpLaniAtIslPCX59_1Z9Y7a7GGzOONu5mi0404W1oKgqxFjvHYRQG3SlKAxj7QfN_k0j-SHef3oPtB83-TWq5JUw5BbABD7ymyTzAIWrT2aA2nI7LiwtxptSwLBSkgkVQxmDa7LRsSRdA0JFj-mlcBzapptXKivFBC3AoKSfq0BZUq17g8g8nfqO21yNpHVrShOGSA4ShJC1pRqsqCbX1I5J1t66A7XEYnVmOjyY6LdHRpVeJxsxVxdnMb65BfXf8AsK5MjHsiYK2Y5cRLZS4hJUEqupSEgE7rcrXu0rFE2pZkOISY7jaVglBUtOtkkk792lri_bagOw_h0OR5eKw4c2e6mwdbg3_QeqruJRc-fi7Obp4MX3W6OjSuK1tMHFtHiToZcOjnCI3Z0oJte_jKHov6ZEKAsZZbZSUtNoQkm9kpAF-mrleKarVFeKaAtZ8kjzRV9WM-SR5oq-gFKUoBSlKAUpSgFKUoBVFi4I6Raq0oDQejF5banokV1TXk1L1Kd26403CrUw0paU0mBCDagQUACxB36W566Pop6KA0ExylGVMOIE2IsN1iACN3QAPRWOVATLeadkw4zq2zmTmNxe1rkW1rp-inooDmGA2d-HQTy-E8UeN97dv7ay8Aqw_0kXS1uywsOboJFb3op6KA180n_G17Z-FM8r_G17Z-FbHop6KA1jxhYyrQ2EneQon-KveDl0qbCSoXFlG1ZvRT0UBzE4e0k3Th0AHPn0SPG6d2_tq8xApaVmDDK0pyJURqE9A03V0PRT0UBpcE5yv9LG5QIVrvBNyDpzkmtZvC2UBwfN8JXCLLiysZipRJNzcdJNuiut6KeigOcmGlKnFJgQgpy-cgC6r3vfTXefXWZCXkKUpDDCVK3kKsT-lbfop6KA188r_G17Z-FM8r_G17Z-FbHop6KAwtBwqKnQlJtayTeteTF4dAafixpDSVZkh3XXXWxHaa3vRT0UBz0ReDUpTcKGlSjmUUixJta506CRRmLwKQlmFDbSLEBAsBa9ubtPrroeinooDmS4CZbTbUiHGW2gpKU30FiCBa264GnZRWHtKStKsOgELACgUjlAbr8nmrp-inooDRDCgkARIthuHpv0dIBrKkyEgBLTIA0ACz8K2fRT0UBr55X-Nr2z8KpmknQttW88_Ctn0U9FAWtpyoA6BarqUoBSlKAUpSgFKUoBSlKAVRW6q1RW6gPFJM6Xxl7_VyPHV_5quk9tYuPS-tyfeq-Nc7HcTjYZJa40VjjUsRW8qc3LUTa_QNN9YsYxONhEISppWGeEQ1yE5jmWoJGnea4publuvvNZvOtx6X1uT71Xxpx6X1uT71XxrXOhIO8VzscxZnB4jUiQhxxDkhqOA3a4U4rKDrzVWMpydkwm2dnj0vrcn3qvjTj0vrcn3qvjXHiYqzKxnEsNQhwPQQ0XFG2VWcEi3PzV0KOU1xZF2bHHpfW5PvVfGnHpfW5PvVfGteo9I2shNYhMhtw8VkuxHOCeVGhqdSlVgbXHYRUx1kv-NyVd8CU8el9bk-9V8acel9bk-9V8ajLu1WGjB2MSjqckR3ZLcSyE5VIcUrLZSVWIIO8HWu8dCRSTqR43DujY49L63J96r4049L63J96r41r0qunLMi7Njj0vrcn3qvjTj0vrcn3qvjWvSmnLMXZscel9bk-9V8acel9bk-9V8a1ya52EYqzii56WUOI4nKXEXntylJAJItza1KlNq9ybs7PHpfW5PvVfGnHpfW5PvVfGufx2Nx_iXDI43wXDcFflZL2zd19K2KjSmu0i7Njj0vrcn3qvjTj0vrcn3qvjWvSmnLMXZscel9bk-9V8acel9bk-9V8a16U05Zi7Njj0vrcn3qvjTj0vrcn3qvjWvWvOmxoEVyTNeQxHbtmcWbAXNh-pFFKb3Ji7Ohx6X1uT71Xxpx6X1uT71XxrXpTTlmLs2OPS-tyfeq-NDOmWP-rk-9V8a16Hce6mnLMXZ7nDJVFZUo3JQCT6KzVhhfY2P-NP7Cs1duuBtBSlKkClKUApSlAKUpQCqK3VWqK3UB8u_KjwwGEcVDZkfPTPBh0kIzXXbNbW3dXF27VtAcCb-c28ITF47GzGMt0rvwybWzC2-pvtFhTWKyI_DOOI4pNTLRktylIJsDfm1rHj-Es41h4iSHHG2w629mbte6FBQGvNcVyEa0YuN-x_ya5SSscJ9MjH9rcZhO4hNhwcMDSEtw3eCU44tJUVqUBewFgBurgYnNlyNnXYc98yXsN2hjxBIUAFOpDiVJKraZrGx7qmOKbPiViisSg4hLwyc4gNOuRsqg6kG4CkqBFxfQ76xHZOCMFZw1DkhKES0TVvFQU466leYqWSNbnf8ApUwqwjb6fTPmSpJWOQ7JEPaTbuQqYmCG48VXGVN8JwX1auVl5z0DptXPwyfMh7SYCho7RiLPcW08cWUkoe-rKgpCb3Qq4vawFjUsmbMwpr2NrlKdWjFm223kXACQgWBSd4PP3itVjZQ_OWGzZ2NYlNew9zOyHsgTbKUkEJSLkg-Nv0oqtOzvl_5t-4Ul-eBJeaoHg87EIm021yYGDvYglWIJKlokNtBJ4JOllG_pqS7MRJ8XDnfnZ0uSnpDr2UuZw0lSjlQD0AWrPhmFNYfNxSS044peIPiQ4FWskhITYdlhz1hjKNPST3__AFFU0rog2N4bMhYC9LxJLTUvEcfiylsNLzpaGdKQnNzmwuT01nxTE5OJbT4zGd8IkxIDiY7KcHRYBZSFKWtV9TqLJ3WFTLHcJZxmIzHkOONobkNSAUWuVNqzAa81aWIbO8Nir2I4diU3DJUhKUyDHyKS9bcSlQIzAaXFZoV4tf7cd_04fwiyku0jr2JYg5s9gbWMv4tFxF9xxDkSEwEypYRexvf6sWspR7ars_Oxp6NtVh8IzUy4iG1QU4mpKnm1LQTlUoEgi4uLnn1rvzNmGnmMO4DEJ8eZAzBmZwgcdIX44XmBCgei3dWKLshEbRi6ZcubN-dUITJU-sZiUggKSUgWPYNBYWpraei_Tv8AT0GlGxydmnlN47AjuYnjkaW4hXGIOLpKxIIGqmleKCDryTu5q4bWL4ri-HS8Uj-E3zipx3iaIbIMRASohKCm_LvblE66noqbwdmiziMOZPxbEMSXCzcVTIyBLRIylXJAzKtpc1hVsmlt2SnD8WxKBCkuKcdiR1ICcyvGKFEFSL8-U-qrKrTTv4fz3eH7cBpI0S5N2g2l4hJlTcNjRMPYlOsxXOCWt529wpW-ybEW6ay_J00thG0TTjzj60Yu8kuuWzL5KNTbS9dPE9nkyp7E-HPl4dOaa4uXmClRcbvcJWFgg2OoO-s2zuBs4ExKbYkSJHGZCpK1yFBSsygAdba7r-msUqkXTaXduIclYjjeGgfKuXOOTz_4eJGUvnL5YjJa3ic-XprBhjWI49s5I2gONT4s1fDOxmmXAGGEoKglCkWsq-XlE661KpWCpd2hi4wzLfjyGmuAcQgJKXm82bKq4uNeca1zH9jmViVHjYpiMTDJS1LfgsqSG1FWqglRGZAVzgHnNXVaLSu9-7sy4onSR1tnMQXi2zuHYg4gNuSoyHlJG4Ep1t6a88bViaPk0a2lGOYorE2UcIkKeu0RwuXKpFrKFuc616kww3HjtsMIS2y2gIQhI0SkCwArheCsXwOOznGJHFMnB8Lyc9s-fotv7KpSqwi-665b7kRkkc1TMrBdqtnm0YriEpvElOtSUSXc6SQ3nCki1kG_MNLVHG8WxTGIE3E4_hMMQLrvEkw2QYiAhRCUkX5d7conp03V6LOwlqZiWFTXHHEuYctbjaU2soqRlN_R0Vyl7JpQ7JGH4tiWHw5S1OvRY6kBJUrxihRBUi_PlPqq8K0LJy4_2_4t-xKku04WL4zNnY6xh8lnG2WGsPalPsYUizpdc5lqvdKU2IsN531ztoUYjM-TvFVYovFmjCkhMdUn6pchkrRlLqRooi5F-kXqcYps83LmR5sSbLw-ey1wAkMFKitvflWFAhQvrc63o_s4zJ2el4TMmTZKZRKnJDrgLma4NxpYWIFgBapjXhHRa7Lf2FJKx1YMfikRpgPPvcGm3CPrzrV2qVzms9YILLkeI0y_JclOoTZTziUhSz0kJAHqrPXjfExih3HupQ7j3VBB7nC-xsf8af2FZqwwvsbH_Gn9hWau5XA2opSlSBSlKAUpSgFKUoBVFbqrVFbqA8BxPEIsXFWosh4IfluuJYSQeWU3JAO69tda11YtATJmR1ym0OQ20vSM1wGkKBIJUdNwPPXO-UaI49hT0yKkmZhskT2bbyUKJUPSnMKiMqK_iWweJ4wmO46rFJzeIOMAXUqKhxISi3P9Wm9u2uPjRjPe322-t_TzNcopk0wnabCMWlCNAmpcfKc6UKbU2Vp-8nMBmHaK2msXgvQJc1uQlUaKpxDzmU2QW_HG6-luaoti-L4ftDjmzLeAyW5kiPNEpa2dRHYCSFZj_tvcDKfVXIaxeBheyu1uGT5TbGImTOyxlX4RYcuUFKd5BB3jSp6unayd927t4-A0Lktk4y6raXZ6PDcQqBiEd99RyaqCUpUggnUb6kVQ3Co8ZcnYuQ7OaaktYctLUYjlPhTSMxB_6bX9NTKsNVJWS_N7Ky3ClKViKilKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQCh3HupQ7j3UB7nC-xsf8af2FZqwwvsbH_Gn9hWau5XA2opSlSBSlKAUpSgFKUoBVFbqrVFC9AfO21eGysVaehxp5hMurWiQpLQWtbZuClJJ5J7da3YzLcaO0wwkIaaQEISP9qQLAeoV6I7sEhbq1iasBSiq2Qc5qzwAT15fsCuYl0biXutu8UeF0ZkAQhCM2RCU5jc5UgXPbQtoK8xQgqtbMUi9ui9T_AMAE9eX7Ap4AJ68v2BVdl4nLzRGonkQHKm4OVNxuNt3dVanvgAnry_YFPABPXl-wKjZeJy80NRPIgVKnvgAnry_YFPABPXl-wKbLxOXmhqJ5ECpU98AE9eX7Ap4AJ68v2BTZeJy80NRPIgVKnvgAnry_YFPABPXl-wKbLxOXmhqJ5ECpU98AE9eX7Ap4AJ68v2BTZeJy80NRPIgVKnvgAnry_YFPABPXl-wKbLxOXmhqJ5ECpU98AE9eX7Ap4AJ68v2BTZeJy80NRPIgVKnvgAnry_YFPABPXl-wKbLxOXmhqJ5ECpU98AE9eX7Ap4AJ68v2BTZeJy80NRPIgVKnvgAnry_YFPABPXl-wKbLxOXmhqJ5ECpU98AE9eX7Ap4AJ68v2BTZeJy80NRPIgVDuPdU98AE9eX7Ap4AJ55y7eYKbLxOXmhqJ5E1hfY2P-NP7Cs9WMI4JpCL3CUgeqr66lcD3ilKVIFKUoBSlKAUpSgFUVVaoqgPCJe3e0aJb6UYiUpS4oABpGgBNuasPh7tL-Jn3SP61Esbm8Wxhlng83GpTjV72y2C1X7fFtXNxzaCFg6HxIWVSGmDIDKQcyk3y3vu3m1cZrsTKVoye_vZ9R6rgIQ0p04q3Hcsr5E_8PdpfxM-6R_Wnh7tL-Jn3SP6147slt1HnFLGKvFM6RIKWm0NHIhJsEpzfyalMzFmYuLQ4C0OlySFFKkoJCbdJA5_056vUli6ctCUpX8WY6EOja9PWQhG3gu3gTnw92l_Ez7pH9aeHu0v4mfdI_rUJj4vBkyzGZkJU9ygBYgKKd4SbWVbnsTVZ2KwoDiUS30trKc1spOVN7ZlWHJHabCsWvxN7aUr-LM_VMBo6WrhbwRNfD3aX8TPukf1p4e7S_iZ90j-tQl7F4LMsRnJKQ6SkWsSAVeKCq1gTzAnWtTE8ejxn247C0uSDJaYWnKqycygCM1rZgDe16lVsU3ZSlzZWWG6Pim3CG7uR6D4e7S_iZ90j-tPD3aX8TPukf1qFN4rCcmmIiQkv3KbWNiob0hVrEjnAN61pmNtMYk7AS24X0RlSAooVlNua9v1v2b6KtiW7aUubJlhcBFXdOHG3BccuBPvD3aX8TPukf1p4e7S_iZ90j-tQLCMciYhGaVwyEvGOl9xJBSkCwuQSLEA6XFbUDE4k8rER7OpABIKSk2O42IFwendSVbExveUt3exDC4CdtGnDf3Imfh7tL-Jn3SP608PdpfxM-6R_WvN4e0TTjuIOyVIYhRnhHSVNOZ1Kva50tqdLDUaX310HMaw9t1DbkgIWsJNlIUMubxcxtySehVql1cUnbSlzZWOH6PkrqEOSJx4e7S_iZ90j-tPD3aX8TPukf1qDnGsPEwxTJAeDvAkZFWSs2skqtYE3FtdaphWLM4k_NaZQ6kxXeCUVoUkK0BuLjt3b9L84qNdiUruUubLLC4BtRUIX8ETnw92l_Ez7pH9aeHu0v4mfdI_rUJGLQTLVFEhJeBItlNiQLlIVaxIHMDerIWN4dNUBGlJVdvhgSlSQUc6gSACBfW26mvxXHSlzZPVcBe2hDlEnPh7tL-Jn3SP608PdpfxM-6R_WoBCxxmdi6IsRQcZMZT5WUqSbhSQLXAuCCdeyuxUSxGIhulN82TTwWBqK8KcWv-q9CT-Hu0v4mfdI_rTw92l_Ez7pH9ajFKr1qv775svs7CfCj-lehJ_D3aX8TPukf1p4e7S_iZ90j-tRilOtV_ffNjZ2E-FH9K9CT-Hu0v4mfdI_rTw92l_Ez7pH9ajFKdar---bGzsJ8KP6V6En8PdpfxM-6R_Wh292ltf5yOn_pI_rUYqh8U91Ot1_ffNk7Ownwo_pXofUENanIrK1-MpCVHvIrNWvh_2GP_AMaf2FbFdsuB8nlxFKUqSBSlKA__2Q==',
            datarules: {"AvoidLandingPageRedirects": {
                "localizedRuleName": "Avoid landing page redirects",
                "ruleImpact": 0,
                "groups": [
                    "SPEED"
                ],
                "summary": {
                    "format": "Your page has no redirects. Learn more about {{BEGIN_LINK}}avoiding landing page redirects{{END_LINK}}.",
                    "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/AvoidRedirects"
                        }
                    ]
                }
            },
                "EnableGzipCompression": {
                    "localizedRuleName": "Enable compression",
                    "ruleImpact":0,
                    "groups": [
                        "SPEED"
                    ],
                    "summary": {
                        "format": "You have compression enabled. Learn more about {{BEGIN_LINK}}enabling compression{{END_LINK}}.",
                        "args": [
                            {
                                "type": "HYPERLINK",
                                "key": "LINK",
                                "value": "https://developers.google.com/speed/docs/insights/EnableCompression"
                            }
                        ]
                    }
                },
                "LeverageBrowserCaching": {
                    "localizedRuleName": "Leverage browser caching",
                    "ruleImpact":0,
                    "groups": [
                        "SPEED"
                    ],
                    "summary": {
                        "format": "Setting an expiry date or a maximum age in the HTTP headers for static resources instructs the browser to load previously downloaded resources from local disk rather than over the network."
                    },
                    "urlBlocks": [
                        {
                            "header": {
                                "format": "{{BEGIN_LINK}}Leverage browser caching{{END_LINK}} for the following cacheable resources:",
                                "args": [
                                    {
                                        "type": "HYPERLINK",
                                        "key": "LINK",
                                        "value": "https://developers.google.com/speed/docs/insights/LeverageBrowserCaching"
                                    }
                                ]
                            },
                            "urls": [
                                {
                                    "result": {
                                        "format": "{{URL}} ({{LIFETIME}})",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/images/rkbadg.png"
                                            },
                                            {
                                                "type": "DURATION",
                                                "key": "LIFETIME",
                                                "value": "10 minutes"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "{{URL}} ({{LIFETIME}})",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/images/rkbgit.png"
                                            },
                                            {
                                                "type": "DURATION",
                                                "key": "LIFETIME",
                                                "value": "10 minutes"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "{{URL}} ({{LIFETIME}})",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/images/rkbkrs.png"
                                            },
                                            {
                                                "type": "DURATION",
                                                "key": "LIFETIME",
                                                "value": "10 minutes"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "{{URL}} ({{LIFETIME}})",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/materialize/css/materialize.min.css"
                                            },
                                            {
                                                "type": "DURATION",
                                                "key": "LIFETIME",
                                                "value": "10 minutes"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "{{URL}} ({{LIFETIME}})",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/materialize/font/material-design-icons/Material-Design-Icons.woff"
                                            },
                                            {
                                                "type": "DURATION",
                                                "key": "LIFETIME",
                                                "value": "10 minutes"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "{{URL}} ({{LIFETIME}})",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/materialize/font/roboto/Roboto-Bold.woff"
                                            },
                                            {
                                                "type": "DURATION",
                                                "key": "LIFETIME",
                                                "value": "10 minutes"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "{{URL}} ({{LIFETIME}})",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/materialize/font/roboto/Roboto-Light.woff"
                                            },
                                            {
                                                "type": "DURATION",
                                                "key": "LIFETIME",
                                                "value": "10 minutes"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "{{URL}} ({{LIFETIME}})",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/materialize/font/roboto/Roboto-Medium.woff"
                                            },
                                            {
                                                "type": "DURATION",
                                                "key": "LIFETIME",
                                                "value": "10 minutes"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "{{URL}} ({{LIFETIME}})",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/materialize/font/roboto/Roboto-Regular.woff"
                                            },
                                            {
                                                "type": "DURATION",
                                                "key": "LIFETIME",
                                                "value": "10 minutes"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "{{URL}} ({{LIFETIME}})",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/materialize/font/roboto/Roboto-Thin.woff"
                                            },
                                            {
                                                "type": "DURATION",
                                                "key": "LIFETIME",
                                                "value": "10 minutes"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "{{URL}} ({{LIFETIME}})",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/materialize/js/materialize.min.js"
                                            },
                                            {
                                                "type": "DURATION",
                                                "key": "LIFETIME",
                                                "value": "10 minutes"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                "MainResourceServerResponseTime": {
                    "localizedRuleName": "Reduce server response time",
                    "ruleImpact":0,
                    "groups": [
                        "SPEED"
                    ],
                    "summary": {
                        "format": "Your server responded quickly. Learn more about {{BEGIN_LINK}}server response time optimization{{END_LINK}}.",
                        "args": [
                            {
                                "type": "HYPERLINK",
                                "key": "LINK",
                                "value": "https://developers.google.com/speed/docs/insights/Server"
                            }
                        ]
                    }
                },
                "MinifyCss": {
                    "localizedRuleName": "Minify CSS",
                    "ruleImpact":0,
                    "groups": [
                        "SPEED"
                    ],
                    "summary": {
                        "format": "Your CSS is minified. Learn more about {{BEGIN_LINK}}minifying CSS{{END_LINK}}.",
                        "args": [
                            {
                                "type": "HYPERLINK",
                                "key": "LINK",
                                "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                            }
                        ]
                    }
                },
                "MinifyHTML": {
                    "localizedRuleName": "Minify HTML",
                    "ruleImpact":0,
                    "groups": [
                        "SPEED"
                    ],
                    "summary": {
                        "format": "Your HTML is minified. Learn more about {{BEGIN_LINK}}minifying HTML{{END_LINK}}.",
                        "args": [
                            {
                                "type": "HYPERLINK",
                                "key": "LINK",
                                "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                            }
                        ]
                    }
                },
                "MinifyJavaScript": {
                    "localizedRuleName": "Minify JavaScript",
                    "ruleImpact":0,
                    "groups": [
                        "SPEED"
                    ],
                    "summary": {
                        "format": "Your JavaScript content is minified. Learn more about {{BEGIN_LINK}}minifying JavaScript{{END_LINK}}.",
                        "args": [
                            {
                                "type": "HYPERLINK",
                                "key": "LINK",
                                "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                            }
                        ]
                    }
                },
                "MinimizeRenderBlockingResources": {
                    "localizedRuleName": "Eliminate render-blocking JavaScript and CSS in above-the-fold content",
                    "ruleImpact":0,
                    "groups": [
                        "SPEED"
                    ],
                    "summary": {
                        "format": "Your page has {{NUM_SCRIPTS}} blocking script resources and {{NUM_CSS}} blocking CSS resources. This causes a delay in rendering your page.",
                        "args": [
                            {
                                "type": "INT_LITERAL",
                                "key": "NUM_SCRIPTS",
                                "value": "1"
                            },
                            {
                                "type": "INT_LITERAL",
                                "key": "NUM_CSS",
                                "value": "2"
                            }
                        ]
                    },
                    "urlBlocks": [
                        {
                            "header": {
                                "format": "None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML."
                            }
                        },
                        {
                            "header": {
                                "format": "{{BEGIN_LINK}}Remove render-blocking JavaScript{{END_LINK}}:",
                                "args": [
                                    {
                                        "type": "HYPERLINK",
                                        "key": "LINK",
                                        "value": "https://developers.google.com/speed/docs/insights/BlockingJS"
                                    }
                                ]
                            },
                            "urls": [
                                {
                                    "result": {
                                        "format": "{{URL}}",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/materialize/js/materialize.min.js"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "header": {
                                "format": "{{BEGIN_LINK}}Optimize CSS Delivery{{END_LINK}} of the following:",
                                "args": [
                                    {
                                        "type": "HYPERLINK",
                                        "key": "LINK",
                                        "value": "https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery"
                                    }
                                ]
                            },
                            "urls": [
                                {
                                    "result": {
                                        "format": "{{URL}}",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/materialize/css/materialize.min.css"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "{{URL}}",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "https://fonts.googleapis.com/css?family=Source+Code+Pro"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                "OptimizeImages": {
                    "localizedRuleName": "Optimize images",
                    "ruleImpact":0,
                    "groups": [
                        "SPEED"
                    ],
                    "summary": {
                        "format": "Properly formatting and compressing images can save many bytes of data."
                    },
                    "urlBlocks": [
                        {
                            "header": {
                                "format": "{{BEGIN_LINK}}Optimize the following images{{END_LINK}} to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                "args": [
                                    {
                                        "type": "HYPERLINK",
                                        "key": "LINK",
                                        "value": "https://developers.google.com/speed/docs/insights/OptimizeImages"
                                    },
                                    {
                                        "type": "BYTES",
                                        "key": "SIZE_IN_BYTES",
                                        "value": "1.3MiB"
                                    },
                                    {
                                        "type": "PERCENTAGE",
                                        "key": "PERCENTAGE",
                                        "value": "93%"
                                    }
                                ]
                            },
                            "urls": [
                                {
                                    "result": {
                                        "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/images/rkbkrs.png"
                                            },
                                            {
                                                "type": "BYTES",
                                                "key": "SIZE_IN_BYTES",
                                                "value": "829.8KiB"
                                            },
                                            {
                                                "type": "PERCENTAGE",
                                                "key": "PERCENTAGE",
                                                "value": "93%"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/images/rkbadg.png"
                                            },
                                            {
                                                "type": "BYTES",
                                                "key": "SIZE_IN_BYTES",
                                                "value": "430.3KiB"
                                            },
                                            {
                                                "type": "PERCENTAGE",
                                                "key": "PERCENTAGE",
                                                "value": "94%"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "result": {
                                        "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                        "args": [
                                            {
                                                "type": "URL",
                                                "key": "URL",
                                                "value": "http://rahulakrishna.github.io/images/rkbgit.png"
                                            },
                                            {
                                                "type": "BYTES",
                                                "key": "SIZE_IN_BYTES",
                                                "value": "71.3KiB"
                                            },
                                            {
                                                "type": "PERCENTAGE",
                                                "key": "PERCENTAGE",
                                                "value": "85%"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                "PrioritizeVisibleContent": {
                    "localizedRuleName": "Prioritize visible content",
                    "ruleImpact":0,
                    "groups": [
                        "SPEED"
                    ],
                    "summary": {
                        "format": "You have the above-the-fold content properly prioritized. Learn more about {{BEGIN_LINK}}prioritizing visible content{{END_LINK}}.",
                        "args": [
                            {
                                "type": "HYPERLINK",
                                "key": "LINK",
                                "value": "https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent"
                            }
                        ]
                    }
                }
            },
            progressstyle:{
                width:'0%'
            }
        };
        this.processForm=this.processForm.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
           inurl:e.target.value
        });
    }
    processForm(e){
        e.preventDefault();
        const url=this.state.inurl;
        this.setState({
            loadervisibility:'visible'
        });
        console.log(this.state.loadervisibility);
        /*const expression=[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*);
        const regex=new RegExp(expression);*/
        if(1) {
            $.ajax({
                url: 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=http%3A%2F%2F' + url + '&screenshot=true&key=AIzaSyBKuUWqMYnnvt4JpJzL55a7MsYns7Jzxv8',
                /*url:'./public/mock/mock_webdata.json',*/
                dataType: 'json',
                cache: false,
                xhr(){
                    const xhr = new window.XMLHttpRequest();
                    //Upload progress
                    xhr.upload.addEventListener("progress", function (evt) {
                        if (evt.lengthComputable) {
                            let percentComplete = evt.loaded / evt.total;
                            //Do something with upload progress
                            this.state={
                                percent:percentComplete
                            }
                        }
                        else {
                            console.log('fuck happened beforehand');
                        }
                    }, false);
                    //Download progress
                    xhr.addEventListener("progress", function (evt) {
                        if (evt.lengthComputable) {
                            let percentComplete = evt.loaded / evt.total;
                            //Do something with download progress
                            console.log(percentComplete);
                            console.log(evt.loaded);
                            console.log(evt.total);
                            this.state={
                                percent:percentComplete
                            }
                        }
                        else {
                            console.log('fuck happened');
                        }
                    }, false);
                    return xhr;
                },
                success: (data) => {
                    this.setState({
                        data: data,
                        dataurl: data.id,
                        datatitle: data.title,
                        datagrade: data.ruleGroups.SPEED.score,
                        dataresources: data.pageStats.numberResources,
                        datahosts: data.pageStats.numberHosts,
                        databytes: data.pageStats.totalRequestBytes,
                        datastaticresources: data.pageStats.numberStaticResources,
                        datahtmlbytes: data.pageStats.htmlResponseBytes,
                        datacssbytes: data.pageStats.cssResponseBytes,
                        dataimagebytes: data.pageStats.imageResponseBytes,
                        datajsbytes: data.pageStats.javascriptResponseBytes,
                        datajs: data.pageStats.numberJsResources,
                        datacss: data.pageStats.numberCssResources,
                        datarules: data.formattedResults.ruleResults,
                        screenshot:data.screenshot.data,
                        loadervisibility:'hidden'
                    });

                    console.log(this.state.screenshot);
                    this.updateProgress();
                    this.removePreloader();
                },
                error: (xhr, status, err) => {
                    console.error(status, err.toString());
                    alert("Error occured! Either the URL is wrong or your connection is lost!");
                }
            });
        }
        else{
            alert('Invalid URL!');
        }
    }
    updateProgress(){
        this.setState({
            progressstyle: {
                width: this.state.datagrade+'%'
            }
        });
        console.log(progresstyle);
    }
    removePreloader(){
        this.setState({
           loadervisibility:'hidden'
        });
    }
    checkremovePreloader(){
        if(this.state.loadervisibility==='hidden'){
            this.removePreloader();
        }
    }
    render() {
        console.log(this.state.loadervisibility);
        var loader;
        if(this.state.loadervisibility==='visible'){
            loader=<Preloader/>;
            this.checkremovePreloader();
        }
        else if(this.state.loadervisibility==='hidden'){
            loader=<div>Success!</div>;
        }
        return (
            <div>
            <div className="row col s12">
            <form className="col s12">
                <div className="col m8 push-m2">
                    <div className="card col s12">
                        <div className="card-content row">
                                <input type="text" placeholder="mysite.com" value={this.state.inurl} onChange={this.handleChange}/>
                            <input type="submit" className="btn red col m4 push-m4" value="Process" onClick={this.processForm}/>
                        </div>
                    </div>
                </div>
            </form>
                <div className="row center">
                    {loader}
                    <div className="col s6 push-s3">
                        <Screenshot className="col s6 push-s6" base64={this.state.screenshot}/>
                    </div>
                </div>
            </div>
                {/*The details will begin from here*/}
                <div className="row">
                    <h3 className="center">Summary</h3>
                    <div className="col s2 push-s5">
                      <CircularProgressbar percentage={this.state.datagrade}/>
                    </div>
                    </div>
                    <div className="row center">
                    <div className="col s4 push-s4">
                        <PageGrade speed={this.state.datagrade}/>
                    </div>
                </div>
                    <div className="col s8 push-s2">
                        <Card title={this.state.dataurl} content={this.state.datatitle}/>
                    </div>

                <div className="row">
                    <div className="col s3">
                        <Card title="No. of Resources" content={this.state.dataresources}/>
                    </div>
                    <div className="col s3">
                        <Card title="No. of Hosts" content={this.state.datahosts}/>
                    </div>
                    <div className="col s3">
                        {/*TODO: Remove these from Cards and make a new Size card which will convert Bytes to MBs*/}
                        <Size title="Size" size={this.state.databytes} postdata=" bytes" color="red"/>
                    </div>
                    <div className="col s3">
                        <Card title="Static Resources" content={this.state.datastaticresources} className="red"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3">
                        <Size title="Size of HTML" size={this.state.datahtmlbytes} postdata=" bytes"/>
                    </div>
                    <div className="col s3">
                        <Card title="Size of CSS" content={this.state.datacssbytes} postdata=" bytes"/>
                    </div>
                    <div className="col s3">
                        <Size title="Size of Images" size={this.state.dataimagebytes} postdata=" bytes"/>
                    </div>
                    <div className="col s3">
                        <Card title="Size of Javascript" content={this.state.datajsbytes} postdata=" bytes"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3">
                        <Card title="No. of JS files" content={this.state.datajs}/>
                    </div>
                    <div className="col s3">
                        <Card title="No. of CSS files" content={this.state.datacss}/>
                    </div>
                </div>
                <Rulelist rules={this.state.datarules}/>

                <div className="row">
                    The list of files should come up here.
                </div>
                </div>
        );
    }
}

export default MainApp;
