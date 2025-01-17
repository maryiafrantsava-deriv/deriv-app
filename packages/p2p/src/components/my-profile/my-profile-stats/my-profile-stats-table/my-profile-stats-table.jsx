import * as React from 'react';
import { Icon, PopoverMobile, Table, Text } from '@deriv/components';
import { isMobile } from '@deriv/shared';
import { observer } from 'mobx-react-lite';
import { localize, Localize } from 'Components/i18next';
import { useStores } from 'Stores';

const MyProfileStatsTable = () => {
    const { general_store, my_profile_store } = useStores();
    const [is_statistics_tooltip_open, setIsStatisticsTooltipOpen] = React.useState(false);

    const { daily_buy, daily_buy_limit, daily_sell, daily_sell_limit, total_orders_count } =
        my_profile_store.advertiser_info;

    return (
        <Table>
            <Table.Row className='my-profile-stats-table'>
                <Table.Cell className='my-profile-stats-table__cell'>
                    <Text size={isMobile() ? 'xxxs' : 'xxs'} color='less-prominent' line_height='m' as='p'>
                        <Localize i18n_default_text='Total orders' />
                    </Text>
                    <Text color='prominent' weight='bold' line_height='l' as='p' size={isMobile() ? 'xs' : 'xs'}>
                        {total_orders_count || '-'}
                    </Text>
                </Table.Cell>
                {isMobile() ? (
                    <Table.Cell className='my-profile-stats-table__cell'>
                        <Text size='xxxs' color='less-prominent' line_height='m' as='p'>
                            <Localize
                                i18n_default_text='Buy / Sell ({{currency}})'
                                values={{ currency: general_store.client.currency }}
                            />
                        </Text>
                        <Text color='prominent' weight='bold' line_height='l' as='p' size='xs'>
                            {daily_buy || '-'}/{daily_sell || '-'}
                        </Text>
                    </Table.Cell>
                ) : (
                    <React.Fragment>
                        <Table.Cell className='my-profile-stats-table__cell'>
                            <Text size='xxs' color='less-prominent' line_height='m' as='p'>
                                <Localize
                                    i18n_default_text='Buy ({{currency}})'
                                    values={{ currency: general_store.client.currency }}
                                />
                            </Text>
                            <Text color='prominent' weight='bold' line_height='l' as='p' size='xs'>
                                {daily_buy || '0'}
                            </Text>
                        </Table.Cell>
                        <Table.Cell className='my-profile-stats-table__cell'>
                            <Text size='xxs' color='less-prominent' line_height='m' as='p'>
                                <Localize
                                    i18n_default_text='Sell ({{currency}})'
                                    values={{ currency: general_store.client.currency }}
                                />
                            </Text>
                            <Text color='prominent' weight='bold' line_height='l' as='p' size='xs'>
                                {daily_sell || '-'}
                            </Text>
                        </Table.Cell>
                    </React.Fragment>
                )}
                <Table.Cell className='my-profile-stats-table__cell'>
                    <Text size={isMobile() ? 'xxxs' : 'xxs'} color='less-prominent' line_height='m' as='p'>
                        <Localize
                            i18n_default_text='Buy / Sell limit ({{currency}})'
                            values={{ currency: general_store.client.currency }}
                        />
                    </Text>
                    <Text color='prominent' weight='bold' line_height='m' as='p' size={isMobile() ? 'xs' : 'xs'}>
                        {daily_buy_limit && daily_sell_limit
                            ? `${Math.floor(daily_buy_limit)} / ${Math.floor(daily_sell_limit)}`
                            : '-'}
                    </Text>
                </Table.Cell>
                <div className='my-profile-stats-table__popover'>
                    <PopoverMobile
                        className='my-profile__stats-popover'
                        button_text={localize('Got it')}
                        is_open={is_statistics_tooltip_open}
                        message={localize('Your Buy/Sell limit resets at 00:00 GMT daily.')}
                        setIsOpen={setIsStatisticsTooltipOpen}
                    >
                        <Icon icon='IcInfoOutline' size={16} />
                    </PopoverMobile>
                </div>
            </Table.Row>
        </Table>
    );
};

export default observer(MyProfileStatsTable);
