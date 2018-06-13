/**
 * 主div
 */
export function DIV_SHOW(url): string {
    let result: string = `
        <div id="piece_div_show">
          <div class="piece_header_show">
            <img src="${url}/icons/title.png" class="piece_title_img"/>
            <i id="piece_close_show" class="piece_close_show"></i>
          </div>
          <div id="piece_content_show" class="piece_content_show">
          </div>
          <div>
            <div id="piece_footer_left_show" class="piece_footer_left_show">left</div>
            <div id="piece_footer_right_show" class="piece_footer_left_show">right</div>
          </div>
        </div>`;
    return result;
}

export function FIRST_PAGE(url): string {
    let result: string = `
        <div class="piece_page_content">
            <div>
                <div class="piece_page_col">主页</div>
                <div class="piece_page_col">目录</div>
            </div>
            <div class="piece_first_content">
                <img class="piece_first_img" src="${url}/img/lufei.png">
            </div>
            <div class="piece_first_content" style="display: none">
                <p>------------</p>
                <p>------------</p>
                <p>------------</p>
                <p>------------</p>
                <p>------------</p>
                <p>------------</p>
                <p>------------</p>
                <p>------------</p>
                <p>------------</p>
                <p>------------</p>
            </div>
        </div>`;
    return result;
}

export const SECOND_PAGE: string = `
<div class="piece_page_content">
  <input id="coupon" type="text" value="你好">
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>  
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
  <p>123</p>
</div>`;

export const EG_PAGE: string = `
<div class="piece_page_content">

  <input id="coupon" type="text" value="你好">
  <span id="btnCoupon" class="piece_btn_copy" data-clipboard-target="#coupon">Copy</span>
  <input id="md1" type="text">
  
  <br><br><br><br><br>
  
  <input id="mdnum" type="text"><span id="md5" class="piece_btn_copy">转换</span>
  <input style="width: 95%" id="mdnumTo" type="text">
</div>`;

