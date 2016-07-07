package com.flipkart.foxtrot.core.querystore.impl;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by hardik.dosi on 01/07/16.
 */
public class RestrictionsConfig {
    private long limitupperbound;
    private String betweenduration;
    private String lastduration;
    private long fieldsize;

    public long getFieldsize() {
        return fieldsize;
    }

    public void setFieldsize(long fieldsize) {
        this.fieldsize = fieldsize;
    }

    public long getLimitupperbound() {
        return limitupperbound;
    }

    public void setLimitupperbound(long limitupperbound) {
        this.limitupperbound = limitupperbound;
    }

    public String getBetweenduration() {
        return betweenduration;
    }

    public void setBetweenduration(String betweenduration) {
        this.betweenduration = betweenduration;
    }

    public String getLastduration() {
        return lastduration;
    }

    public void setLastduration(String lastduration) {
        this.lastduration = lastduration;
    }
}
