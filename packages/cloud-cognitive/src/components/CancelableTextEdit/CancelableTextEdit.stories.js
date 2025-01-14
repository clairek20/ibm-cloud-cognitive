/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';

import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { CancelableTextEdit } from '.';
import mdx from './CancelableTextEdit.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(CancelableTextEdit.displayName),
  component: CancelableTextEdit,
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const actionInput = action('input');
const actionChange = action('change');
const actionRevert = action('revert');

// eslint-disable-next-line react/prop-types
const Template = ({
  revertDescription,
  saveDescription,
  value: initialValue,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (val) => {
    setValue(val);
    actionChange(val);
  };
  const onInput = actionInput;
  const onRevert = actionRevert;

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <CancelableTextEdit
      {...rest}
      {...{
        onChange,
        onInput,
        onRevert,
        revertDescription,
        saveDescription,
        value,
      }}
    />
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const Default = prepareStory(Template, {
  args: {
    id: 'edit button',
    editDescription: 'Edit',
    labelText: 'Label',
    revertDescription: 'Revert',
    saveDescription: 'Save',
    value: 'hello, world',
  },
});
