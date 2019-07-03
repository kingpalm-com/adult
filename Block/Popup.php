<?php
namespace KingPalm\Adult\Block;
use Magento\Framework\View\Element\Template as _P;
// 2019-07-03
/** @final Unable to use the PHP «final» keyword here because of the M2 code generation. */
class Popup extends _P {
	/**
	 * 2019-07-03
	 * @used-by vendor/kingpalm/adult/view/frontend/templates/popup.phtml
	 * @param string $n
	 * @param string $l
	 * @return string
	 */
	function cb($n, $l) {$n = "kingpalm_adult_$n"; return df_tag('div', 'df-field df-checkbox', [
		df_tag('input', ['class' => 'df-checkbox','id' => $n,'name' => $n,'type' => 'checkbox'])
		,df_tag('label', ['class' => 'addafter', 'for' => $n], $l)
	]);}
}