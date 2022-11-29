import { Link } from "react-router-dom";
import * as React from "react";
import { BlockTransactionsListContainer } from "@/shared/block-details-container/block-transactions-list-container";

import {useTranslation} from "next-i18next";

export function BlockTransactions({
  blockNumber,
}: {
  blockNumber: number;
}): JSX.Element {
  const {t} = useTranslation("common");
  return (
    <section>
      <div className="card mb-3">
        <div className="card-tabs js-card-tabs">
          <Link
            className="card-tab active noCaret"
            to={`/block/${blockNumber}/transactions`}
          >
            {t("nav.txs")}
          </Link>
        </div>

        <BlockTransactionsListContainer blockNumber={blockNumber} />
      </div>
    </section>
  );
}
