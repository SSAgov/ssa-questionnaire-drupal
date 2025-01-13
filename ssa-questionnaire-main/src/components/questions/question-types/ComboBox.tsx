import React from 'react';
import { useCombobox } from 'downshift';
// import { states as _states } from '@/constants';
import { states } from '@/constants';
import caret from '@/assets/caret.svg';
import times from '@/assets/times.svg';
import styles from './ComboBox.module.css';
import { IStateInfo } from '@/interfaces';
import { GlobalContext } from '@/context/global/GlobalContext';

function getStatesFilter(inputValue: string) {
  return function statesFilter(state: IStateInfo) {
    return (
      !inputValue ||
      state.name.toLowerCase().includes(inputValue) ||
      state.abbreviation.toLowerCase().includes(inputValue)
    );
  };
}

export const ComboBox: React.FC<{
  onSelection: (newSelectedItem: any) => void;
  defaultSelectedItem: IStateInfo;
  showComboBox: boolean;
  label: string;
}> = ({ onSelection, defaultSelectedItem = null, showComboBox, label }) => {
  const { t } = React.useContext(GlobalContext);
  const [items, setItems] = React.useState(states);
  const comboBoxProps = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(states.filter(getStatesFilter(inputValue)));
    },
    onIsOpenChange(changes) {
      setItems(states);
    },
    onSelectedItemChange({ selectedItem: newSelectedItem }) {
      onSelection(newSelectedItem);
    },
    items,
    defaultSelectedItem,
    defaultInputValue:
      defaultSelectedItem && defaultSelectedItem.name
        ? defaultSelectedItem.name
        : '',
    // defaultHighlightedIndex: 0,
    // initialHighlightedIndex: 0,
    itemToString(item) {
      return item ? item.name : '';
    },
  });

  const {
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
    selectItem,
    closeMenu,
    openMenu,
    inputValue,
    reset,
    setInputValue,
    toggleMenu,
    isOpen,
    setHighlightedIndex,
  } = comboBoxProps;

  React.useEffect(() => {
    if (defaultSelectedItem && defaultSelectedItem.name) {
      setInputValue(defaultSelectedItem.name);
      selectItem(defaultSelectedItem);
    }
  }, [defaultSelectedItem]);

  // console.log('selectedItem = ', selectedItem);

  // const isOpen = true;

  const toggleButtonProps = {
    ...getToggleButtonProps(),
    tabIndex: 0,
  };

  return (
    <div className={`${styles.ComboBox} ${!showComboBox ? styles.hidden : ''}`}>
      <div className={styles.inputGroup}>
        <label className={`${styles.comboBoxLabel}`} {...getLabelProps()}>
          {label}
        </label>
        <div
          className={`${styles.comboBoxInputWrapper} ${
            isOpen ? styles.isOpen : ''
          }`}
          {...getComboboxProps()}
        >
          <input
            placeholder={t('combo_placeholder')}
            className={styles.comboBoxInput}
            maxLength={35}
            {...getInputProps()}
          />
          <div className={styles.comboBoxTriggerContainer}>
            {selectedItem ? (
              <button
                aria-label="clear selection"
                className={`${styles.comboBoxTrigger} ${styles.closeBtn}`}
                type="button"
                onClick={() => {
                  selectItem(null);
                }}
              >
                <img
                  src={times}
                  alt="X or close icon"
                  className={`${styles.closeIcon} ${
                    isOpen ? styles.isOpen : ''
                  }`}
                />
              </button>
            ) : null}
            <div className={styles.separator} />
            <button
              aria-label="toggle menu"
              className={styles.comboBoxTrigger}
              type="button"
              {...toggleButtonProps}
              // {...getToggleButtonProps()}
            >
              <img
                src={caret}
                alt={`Arrow pointing ${isOpen ? 'up' : 'down'}`}
                className={`${styles.caret} ${isOpen ? styles.isOpen : ''}`}
              />
            </button>
          </div>
        </div>
      </div>
      <ul
        {...getMenuProps()}
        className={`${styles.comboBoxList} ${isOpen ? styles.isOpen : ''}`}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              className={`${styles.comboBoxListItem} ${
                highlightedIndex === index ? styles.highlighted : ''
              } ${selectedItem === item ? styles.selected : ''}`}
              key={`${index}`}
              {...getItemProps({ item, index })}
            >
              <span className={styles.dropdownOptionText}>
                {item.name} ({item.abbreviation})
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};
