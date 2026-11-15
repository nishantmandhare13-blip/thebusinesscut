package com.thebusinesscut.lms

import android.app.Application
import com.thebusinesscut.lms.data.repository.LmsRepository

class TheBusinessCutApp : Application() {

    lateinit var repository: LmsRepository
        private set

    override fun onCreate() {
        super.onCreate()
        repository = LmsRepository(this)
    }
}
