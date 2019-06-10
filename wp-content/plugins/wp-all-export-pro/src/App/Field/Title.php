<?php

namespace Wpae\App\Field;


class Title extends Field
{
    const SECTION = 'basicInformation';

    public function getValue($snippetData)
    {
        $basicInformationData = $this->feed->getSectionFeedData(self::SECTION);

        if($basicInformationData['itemTitle'] == 'productTitle') {
            if($this->entry->post_type == 'product_variation' && $basicInformationData['useParentTitleForVariableProducts']) {
                $value = get_post($this->entry->post_parent)->post_title;
            } else {
                $value = $this->entry->post_title;
            }
        } else if($basicInformationData['itemTitle'] == self::CUSTOM_VALUE_TEXT) {
            $value = $this->replaceSnippetsInValue($basicInformationData['itemTitleCV'], $snippetData);
        } else {
            throw new \Exception('Unknown field value');
        }

        $value = substr($value, 0, 150);
        return $value;
    }

    public function getFieldName()
    {
        return 'title';
    }


}