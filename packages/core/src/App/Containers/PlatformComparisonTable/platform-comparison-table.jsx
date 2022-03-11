import classNames from 'classnames';
import React from 'react';
import { Button, Dialog, Text } from '@deriv/components';
import { connect } from 'Stores/connect';
import 'Sass/app/modules/platform-comparison-table.scss';
import { localize } from '@deriv/translations';
import { routes } from '@deriv/shared';
import { useHistory } from 'react-router';

const PlatformComparisonTable = ({
    is_visible,
    enableApp,
    disableApp,
    is_loading,
    toggleWelcomeModal,
    togglePlatformComparisonTable,
}) => {
    const history = useHistory();
    const switchPlatform = React.useCallback(
        ({ route } = {}) => {
            toggleWelcomeModal({ is_visible: false, should_persist: true });
            togglePlatformComparisonTable({ is_visible: false });
            if (route) history.push(route);
        },
        [toggleWelcomeModal, togglePlatformComparisonTable, history]
    );

    return (
        <Dialog
            is_visible={is_visible}
            disableApp={disableApp}
            enableApp={enableApp}
            is_loading={is_loading}
            is_mobile_full_width={false}
            is_content_centered
        >
            <Button
                type='button'
                secondary
                small
                onClick={() => switchPlatform({ route: routes.mt5 })}
                text={localize('Choose DMT5')}
            />
            <Button
                type='button'
                secondary
                small
                onClick={() => switchPlatform({ route: routes.dxtrade })}
                text={localize('Choose Deriv X')}
            />
        </Dialog>
    );
};

export default connect(({ ui, client }) => ({
    is_visible: ui.is_platform_comparison_table,
    enableApp: ui.enableApp,
    disableApp: ui.disableApp,
    is_loading: ui.is_loading,
    toggleWelcomeModal: ui.toggleWelcomeModal,
    togglePlatformComparisonTable: ui.togglePlatformComparisonTable,
}))(PlatformComparisonTable);
